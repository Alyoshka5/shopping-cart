import { ProductCardProps } from "../../types"
import '../../styles/ProductCard.css';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';

export default function ProductCard({ product, productId }: ProductCardProps) {

    const starArray = Array.from({ length: product.rating });
    const emptyStarArray = Array.from({ length: 5 - product.rating });

    const productName = product.name.length > 60 ? `${product.name.substring(0, 60)}...` : product.name;

    return (
        <div className="product-card">
            <div className="img-container">
                <img src={product.imageUrl} alt="" />
            </div>
            <div className="product-info-cart-button-container">
                <div className="product-info">
                    <div className="name-price-container">
                        <div className="name">{productName}</div>
                        <div className="price">${product.price}</div>
                    </div>
                    <div className="company">{product.company}</div>
                    <div className="rating">
                        {starArray.map(() => <Icon path={mdiStar} size={1} />)}
                        {emptyStarArray.map(() => <Icon path={mdiStarOutline} size={1} />)}
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    )
}