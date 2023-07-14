import { CartProps } from "../../types";
import '../../styles/Cart.css';
import CartProductRow from "./CartProductRow";
import CartSummary from "./CartSummary";

export default function Cart({ shoppingCart, setShoppingCart }: CartProps) {
    
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
            
            <CartSummary shoppingCart={shoppingCart} />
        </div>
    );
}