import { CartProps } from "../../types";
import '../../styles/Cart.css';
import CartProductRow from "./CartProductRow";
import { useEffect, useState } from "react";
import discountCodes from "./discountCodes";
import products from "./products";

export default function Cart({ shoppingCart, setShoppingCart }: CartProps) {
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
        <div className="cart">
            <div className="content">
                <h1>Cart</h1>
                <div className="cart-product-row product-row-header">
                    <div></div>
                    <div></div>
                    <div>Product</div>
                    <div className="price-quantity-container">
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                </div>
                {Object.keys(shoppingCart).filter(key => shoppingCart[key] > 0).map((productId: string) => 
                    <CartProductRow productId={productId} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />  )
                }
            </div>
            <div className="summary">
                <form className="discount-code-form" onSubmit={handleDiscountCode}>
                    <label htmlFor='discount-code'>Enter discount code</label>
                    <div className="input-submit-container">
                        <input type='text' value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Discount Code" />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="summary-row">
                    <div>Shipping cost</div>
                    <div>${shippingCost.toFixed(2)}</div>
                </div>
                <div className="summary-row">
                    <div>Discount</div>
                    <div>-${(totalPrice / (1 - discount) * discount).toFixed(2)} ({(discount * 100).toString()}%)</div>
                </div>
                <div className="summary-row">
                    <div>Sales tax</div>
                    <div>TBD</div>
                </div>
                <div className="summary-row">
                    <div>Estimated Total</div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}