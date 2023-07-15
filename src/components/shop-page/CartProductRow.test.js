import Cart from './Cart';
import products from './products';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import CartProductRow from './CartProductRow';

describe('initial render', () => {
    it('renders correct number of CartProductRows', () => {
        const cart = {
            1: 2,
            4: 3,
            5: 1
        }
        const mockSetShoppingCart = jest.fn()

        render(<Cart shoppingCart={cart} setShoppingCart={mockSetShoppingCart} />);
        const cartProductRows = screen.getAllByTestId('cart-product-row');

        expect(cartProductRows.length).toBe(Object.keys(cart).length);
    });
});

describe('renders total price value on CartProductRow', () => {
    it('renders correct total price on initial render', () => {
        const cart = { 1: 2 }
        const mockSetShoppingCart = jest.fn()

        render(<CartProductRow productId={1} shoppingCart={cart} setShoppingCart={mockSetShoppingCart} />);
        const totalPrice = screen.getByTestId('product-total-price');
        
        expect(totalPrice.textContent).toMatch((cart[1] * products[1].price).toFixed(2));
    });

    it('renders correct total price when quantity is incremented', async () => {
        const cart = { 1: 2 };
        const productQuantity = cart[1];
        const user = userEvent.setup();
        const mockSetShoppingCart = jest.fn();

        render(<CartProductRow productId={1} shoppingCart={cart} setShoppingCart={mockSetShoppingCart} />);
        const incrementButton = screen.getByRole('button', { name: '+' });
        const totalPrice = screen.getByTestId('product-total-price');
        
        await act(async () => {
            await user.click(incrementButton);
        });
        
        expect(totalPrice.textContent).toMatch(((productQuantity + 1) * products[1].price).toFixed(2));
    });
});

describe('remove item button', () => {
    it('removes button from shoppingCart when button is clicked', async () => {
        let cart = {
            1: 2,
            4: 3,
            5: 1
        }
        const user = userEvent.setup();
        const mockSetShoppingCart = jest.fn(newCart => {
            console.log('removing');
            cart = newCart;
        });

        render(<Cart shoppingCart={cart} setShoppingCart={mockSetShoppingCart} />);
        const removeItemButton = screen.getAllByTestId('remove-item-button')[0];

        expect(cart[1]).not.toBe(0);

        await act(async () => {
            await user.click(removeItemButton);
        })

        expect(cart[1]).toBe(0);
    });
});