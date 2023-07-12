import { CartProductRowProps } from "../../types";
import products from "./products";
import '../../styles/CartProductRow.css';
import QuantityCounter from "./QuantityCounter";
import { useState } from "react";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function CartProductRow({ productId, shoppingCart }: CartProductRowProps) {
    
    const product = products[parseInt(productId)];
    const [quantity, setQuantity] = useState(shoppingCart[productId]);

    return (
        <div className="cart-product-row">
            <button className="remove-item-button"><Icon path={mdiClose} size={1} /></button>
            
            <div className="img-container">
                <img src={product.imageUrl} alt="" />
            </div>

            <div className="product-info">
                <div className="name">{product.name}</div>
                <div className="company">{product.company}</div>
            </div>
            
            <div className="price-quantity-container">
                <div className="price">${product.price}</div>
                
                <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
                
                <div className="total-price">${(product.price * quantity).toFixed(2) || '--'}</div>
            </div>
        </div>
    )
}