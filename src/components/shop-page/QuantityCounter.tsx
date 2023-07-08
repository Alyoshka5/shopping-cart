import '../../styles/QuantityCounter.css';
import { QuantityCounterProps } from "../../types";


export default function QuantityCounter({ quantity, setQuantity }: QuantityCounterProps) {

    const handleQuantityChange = (changeValue: number) => {
        if (quantity + changeValue <= 0) return;
        setQuantity(quantity + changeValue);
    }

    return (
        <div className="quantity-counter">
            <button className="decrement-button" onClick={() => {handleQuantityChange(-1)}}>-</button>
            <div className="quantity-value">{quantity}</div>
            <button className="increment-button" onClick={() => {handleQuantityChange(1)}}>+</button>
        </div>
    );
}