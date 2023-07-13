import { CartProps } from "../../types";
import '../../styles/Cart.css';
import CartProductRow from "./CartProductRow";

export default function Cart({ shoppingCart, setShoppingCart }: CartProps) {
    const itemQuantity = Object.values(shoppingCart).reduce((total, val) => total + val, 0);

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
                <form className="discount-code-form">
                    <label htmlFor='discount-code'>Enter discount code</label>
                    <div className="input-submit-container">
                        <input type='text' placeholder="Discount Code" />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="summary-row">
                    <div>Shipping cost</div>
                    <div>$0</div>
                </div>
                <div className="summary-row">
                    <div>Discount</div>
                    <div>-$0</div>
                </div>
                <div className="summary-row">
                    <div>Sales tax</div>
                    <div>TBD</div>
                </div>
                <div className="summary-row">
                    <div>Estimated Total</div>
                    <div>$0</div>
                </div>
            </div>
        </div>
    );
}