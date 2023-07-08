import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import QuantityCounter from "./QuantityCounter";

describe('initial render', () => {
    it('renders 1 as initial quantity value', () => {
        const mockQuantity = 1;
        const mockSetQuantity = jest.fn();

        render(<QuantityCounter quantity={mockQuantity} setQuantity={mockSetQuantity} />);
        const quantityValue = screen.getByText('1');

        expect(quantityValue).toBeInTheDocument();
    })
});

describe('incrementing quantity value', () => {
    it('calls setQuantity() once when increment button clicked once', async () => {
        const mockQuantity = 1;
        const mocksetQuantity = jest.fn();
      
        const user = userEvent.setup();
        render(<QuantityCounter quantity={mockQuantity} setQuantity={mocksetQuantity} />);
        const incrementButton = screen.getByRole('button', { name: '+' });
      
        await act(async () => {
          await user.click(incrementButton);
        });
      
        expect(mocksetQuantity).toHaveBeenCalledTimes(1);
      });

    it('calls setQuantity() twice when increment button clicked twice', async () => {
        const mockQuantity = 1;
        const mocksetQuantity = jest.fn();
      
        const user = userEvent.setup();
        render(<QuantityCounter quantity={mockQuantity} setQuantity={mocksetQuantity} />);
        const incrementButton = screen.getByRole('button', { name: '+' });
      
        await act(async () => {
          await user.click(incrementButton);
          await user.click(incrementButton);
        });
      
        expect(mocksetQuantity).toHaveBeenCalledTimes(2);
      });
});

describe('decrementing quantity value', () => {
    it('doesn\'t call setQuantity() value when quantity value is 1', async () => {
        const mockQuantity = 1;
        const mocksetQuantity = jest.fn();
      
        const user = userEvent.setup();
        render(<QuantityCounter quantity={mockQuantity} setQuantity={mocksetQuantity} />);
        const decrementButton = screen.getByRole('button', { name: '-' });
      
        await act(async () => {
          await user.click(decrementButton);
        });
      
        expect(mocksetQuantity).toHaveBeenCalledTimes(0);
    });

    it('calls setQuantity() when quantity value is greater than 1', async () => {
        const mockQuantity = 2;
        const mocksetQuantity = jest.fn();
      
        const user = userEvent.setup();
        render(<QuantityCounter quantity={mockQuantity} setQuantity={mocksetQuantity} />);
        const decrementButton = screen.getByRole('button', { name: '-' });
      
        await act(async () => {
          await user.click(decrementButton);
        });
      
        expect(mocksetQuantity).toHaveBeenCalledTimes(1);
    });
});