import Cart from './Cart';
import products from './products';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import CartSummary from './CartSummary';

/*

discount defaults to 0
discount code applies and renders discount (2 codes)
renders correct total when no discount
renders correct total with discount

*/

describe('applies and displays discount', () => {
    const cart = {
        0: 2,
        1: 1
    }

    it('displays no discount when no discount code inputed', () => {
        render(<CartSummary shoppingCart={cart} />)
        const discountValue = screen.getByText(/-\$\d+(?:\.\d{2})?\s+\(\d+%\)/);

        expect(discountValue.textContent).toMatch('-$0.00 (0%)');
    });

    it('adds and displays discount of 50% when \'!@#\' code is applied', async () => {
        const user = userEvent.setup();
        const discountedAmmount = ((cart[0] * products[0].price + cart[1] * products[1].price) * 0.5).toFixed(2);
        const matchValue = `-$${discountedAmmount} (50%)`;

        render(<CartSummary shoppingCart={cart} />)
        const discountValue = screen.getByText(/-\$\d+(?:\.\d{2})?\s+\(\d+%\)/);
        const discountCodeInput = screen.getByPlaceholderText('Discount Code');
        const discountCodeSubmit = screen.getByRole('button', { name: 'Submit' });

        await act(async () => {
            await user.type(discountCodeInput, '!@#');
            await user.click(discountCodeSubmit);
        })

        expect(discountValue.textContent).toMatch(matchValue);
    });

    it('adds and displays discount of 20% when \'ABC\' code is applied', async () => {
        const user = userEvent.setup();
        const discountedAmmount = ((cart[0] * products[0].price + cart[1] * products[1].price) * 0.2).toFixed(2);
        const matchValue = `-$${discountedAmmount} (20%)`;

        render(<CartSummary shoppingCart={cart} />)
        const discountValue = screen.getByText(/-\$\d+(?:\.\d{2})?\s+\(\d+%\)/);
        const discountCodeInput = screen.getByPlaceholderText('Discount Code');
        const discountCodeSubmit = screen.getByRole('button', { name: 'Submit' });

        await act(async () => {
            await user.type(discountCodeInput, 'ABC');
            await user.click(discountCodeSubmit);
        })

        expect(discountValue.textContent).toMatch(matchValue);
    });
});

describe('renders total price', () => {
    const cart = {
        0: 2,
        1: 1
    }

    it('renders correct total price without a discount', () => {
        const expectTotalPrice = (cart[0] * products[0].price + cart[1] * products[1].price).toFixed(2);
        
        render(<CartSummary shoppingCart={cart} />);
        const totalPrice = screen.getByTestId('total-price');

        expect(totalPrice.textContent).toMatch('$' + expectTotalPrice);
    });

    it('renders correct total price when 20% discount applied', async () => {
        const priceWithoutDiscount = cart[0] * products[0].price + cart[1] * products[1].price;
        const expectTotalPrice = (priceWithoutDiscount - (priceWithoutDiscount * 0.2)).toFixed(2);
        
        const user = userEvent.setup();
        render(<CartSummary shoppingCart={cart} />);
        const discountCodeInput = screen.getByPlaceholderText('Discount Code');
        const discountCodeSubmit = screen.getByRole('button', { name: 'Submit' });
        const totalPrice = screen.getByTestId('total-price');

        await act(async () => {
            await user.type(discountCodeInput, 'ABC');
            await user.click(discountCodeSubmit);
        })

        expect(totalPrice.textContent).toMatch('$' + expectTotalPrice);
    });
});