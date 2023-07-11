import rendrer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ShopPage from './ShopPage';
import NavBar from '../NavBar';
import ProductCard from './ProductCard';
import products from './products';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';

it('renders shop page content', () => {
    const pageTree = rendrer.create(<BrowserRouter><ShopPage /></BrowserRouter>).toJSON();

    expect(pageTree).toMatchSnapshot();
});

describe('nav bar displays item count', () => {
    it('renders 0 on item count of cart icon when cart is empty', () => {
        const cart = [];

        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const itemCount = screen.getByTestId('cart-item-count');

        expect(itemCount.textContent).toBe('0');
    });

    it('renders 3 on item count of cart icon when cart has 3 items', () => {
        const cart = {1: 2, 2: 1};

        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const itemCount = screen.getByTestId('cart-item-count');

        expect(itemCount.textContent).toBe('3');
    });
});

describe('adding items to cart', () => {
    it('adds 1 product to cart', async () => {
        const user = userEvent.setup();
        let cart = {};
        const mockSetShoppingCart = jest.fn((updateFunction) => {
            cart = updateFunction(cart);
        });

        render(<BrowserRouter><ProductCard product={products[1]} productId={1} setShoppingCart={mockSetShoppingCart} /></BrowserRouter>);
        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const cartButton = screen.getByRole('button', { name: 'Add to Cart' });

        await act(async () => {
            await user.click(cartButton);
        });

        expect(cart).toMatchObject({1: 1});
    });

    it('adds 2 products to cart', async () => {
        const user = userEvent.setup();
        let cart = {};
        const mockSetShoppingCart = jest.fn((updateFunction) => {
            cart = updateFunction(cart);
        });

        render(<BrowserRouter><ProductCard product={products[0]} productId={0} setShoppingCart={mockSetShoppingCart} /></BrowserRouter>);
        render(<BrowserRouter><ProductCard product={products[1]} productId={1} setShoppingCart={mockSetShoppingCart} /></BrowserRouter>);
        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const cartButtons = screen.getAllByRole('button', { name: 'Add to Cart' });

        await act(async () => {
            await user.click(cartButtons[0]);
            await user.click(cartButtons[1]);
        });

        expect(cart).toMatchObject({0: 1, 1: 1});
    });

    it('adds multiple items of same product to cart', async () => {
        const user = userEvent.setup();
        let cart = {};
        const mockSetShoppingCart = jest.fn((updateFunction) => {
            cart = updateFunction(cart);
        });

        render(<BrowserRouter><ProductCard product={products[1]} productId={1} setShoppingCart={mockSetShoppingCart} /></BrowserRouter>);
        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const cartButton = screen.getByRole('button', { name: 'Add to Cart' });
        const incrementButton = screen.getByRole('button', { name: '+' });

        await act(async () => {
            await user.click(incrementButton);
        });
        await act(async () => {
            await user.click(incrementButton);
        });
        await act(async () => {
            await user.click(cartButton);
        });

        expect(cart).toMatchObject({1: 3});
    });

    it('resets quantity counter to 1 after add to cart button click', async () => {
        const user = userEvent.setup();
        let cart = [];
        const mockSetShoppingCart = jest.fn((updateFunction) => {
            cart = updateFunction(cart);
        });

        render(<BrowserRouter><ProductCard product={products[1]} productId={1} setShoppingCart={mockSetShoppingCart} /></BrowserRouter>);
        render(<MemoryRouter initialEntries={['/shop']}><NavBar shoppingCart={cart} /></MemoryRouter>);
        const cartButton = screen.getByRole('button', { name: 'Add to Cart' });
        const incrementButton = screen.getByRole('button', { name: '+' });
        const quantityValue = screen.getByTestId('quantity-value');

        await act(async () => {
            await user.click(incrementButton);
        });
        expect(quantityValue.textContent).toMatch('2');
        
        await act(async () => {
            await user.click(cartButton);
        });
        expect(quantityValue.textContent).toMatch('1');

    });
});