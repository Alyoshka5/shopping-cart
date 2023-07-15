import { useEffect, useState } from "react";
import discountCodes from "./discountCodes";
import products from "./products";
import { CartSummaryProps } from "../../types";
import '../../styles/CartSummary.css';

export default function CartSummary({ shoppingCart }: CartSummaryProps) {
    const shippingCost = 0.0;
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const handleDiscountCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.keys(discountCodes).includes(discountCode)) {
            setDiscount(discountCodes[discountCode])
        }
        setDiscountCode('');
    }

    useEffect(() => {
        let price = parseFloat(Object.keys(shoppingCart)
        .reduce((total, key) => total + shoppingCart[key] * products[parseInt(key)].price, 0)
        .toFixed(2));

        price -= shippingCost;
        price -= price * discount;

        setTotalPrice(price);

    }, [shoppingCart, shippingCost, discount]);

    return (
        <div className="cart-summary">
                <form className="discount-code-form" onSubmit={handleDiscountCode}>
                    <label htmlFor='discount-code'>Enter discount code</label>
                    <div className="input-submit-container">
                        <input type='text' value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Discount Code" />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="summary-prices">
                    <div className="summary-row shipping-cost">
                        <div>Shipping cost</div>
                        <div>${shippingCost.toFixed(2)}</div>
                    </div>
                    <div className="summary-row discount">
                        <div>Discount</div>
                        <div>-${(totalPrice / (1 - discount) * discount).toFixed(2)} ({(discount * 100).toString()}%)</div>
                    </div>
                    <div className="summary-row tax">
                        <div>Sales tax</div>
                        <div>TBD</div>
                    </div>
                    <div className="summary-row total-price">
                        <div>Estimated Total</div>
                        <div data-testid='total-price'>${totalPrice.toFixed(2)}</div>
                    </div>
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
    );
}