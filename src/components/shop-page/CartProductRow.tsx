import { CartProductRowProps } from "../../types";
import products from "./products";
import '../../styles/CartProductRow.css';
import QuantityCounter from "./QuantityCounter";
import { useState } from "react";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function CartProductRow({ productId, shoppingCart, setShoppingCart }: CartProductRowProps) {
    
    const product = products[parseInt(productId)];
    const [quantity, setQuantity] = useState(shoppingCart[productId]);

    const removeItem = () => {
        shoppingCart[productId] = 0;
        setShoppingCart({ ...shoppingCart });
    }

    const updateShoppingCart = (changeValue: number) => {
        shoppingCart[productId] = changeValue;
        setShoppingCart({ ...shoppingCart });
    }

    return (
        <div className="cart-product-row">
            <button className="remove-item-button" onClick={() => removeItem()}><Icon path={mdiClose} size={1} /></button>
            
            <div className="img-container">
                <img src={product.imageUrl} alt="" />
            </div>

            <div className="product-info">
                <div className="name">{product.name}</div>
                <div className="company">{product.company}</div>
            </div>
            
            <div className="price-quantity-container">
                <div className="price">${product.price}</div>
                
                <QuantityCounter quantity={quantity} setQuantity={setQuantity} updateCartOnChange={true} updateShoppingCart={updateShoppingCart} />
                
                <div className="total-price">${!isNaN(quantity) ? '' + (product.price * quantity).toFixed(2) : '------'}</div>
            </div>
        </div>
    )
}