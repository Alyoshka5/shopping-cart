import '../../styles/QuantityCounter.css';
import { QuantityCounterProps } from "../../types";


export default function QuantityCounter({ quantity, setQuantity }: QuantityCounterProps) {

    const handleQuantityChange = (changeValue: number) => {
        if (changeValue <= 0) return;
        setQuantity(changeValue);
    }

    return (
        <div className="quantity-counter">
            <button className="decrement-button" onClick={() => {handleQuantityChange(quantity - 1)}}>-</button>
            <input className="quantity-value" data-testid='quantity-value' type='text' value={quantity || 0} onChange={(e) => handleQuantityChange(parseInt(e.target.value))} />
            <button className="increment-button" onClick={() => {handleQuantityChange(quantity + 1)}}>+</button>
        </div>
    );
}