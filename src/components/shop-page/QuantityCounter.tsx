import '../../styles/QuantityCounter.css';
import { QuantityCounterProps } from "../../types";


export default function QuantityCounter({ quantity, setQuantity, updateCartOnChange, updateShoppingCart }: QuantityCounterProps) {

    const handleQuantityChange = (changeValue: number) => {
        if (changeValue <= 0) return;
        setQuantity(changeValue);
        if (updateCartOnChange && updateShoppingCart && changeValue > 0) {
            updateShoppingCart(changeValue);
        }
    }

    const resetQuantityIfBlank = () => {
        if (!quantity) {
            setQuantity(1);
            if (updateShoppingCart) updateShoppingCart(1);
        }
    }

    return (
        <div className="quantity-counter">
            <button className="decrement-button" onClick={() => {handleQuantityChange(quantity - 1)}}>-</button>
            <input className="quantity-value" data-testid='quantity-value' type='text' onBlur={resetQuantityIfBlank} value={quantity || ''} onChange={(e) => handleQuantityChange(parseInt(e.target.value))} />
            <button className="increment-button" onClick={() => {handleQuantityChange(quantity + 1)}}>+</button>
        </div>
    );
}