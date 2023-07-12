import { CartProps } from "../../types";
import '../../styles/Cart.css';
import CartProductRow from "./CartProductRow";

export default function Cart({ shoppingCart }: CartProps) {

    return (
        <div className="cart">
            <h1>Cart</h1>
            {Object.keys(shoppingCart).map((productId: string) => <CartProductRow productId={productId} shoppingCart={shoppingCart} />  )}
        </div>
    );
}