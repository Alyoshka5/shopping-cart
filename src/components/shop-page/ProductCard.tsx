import { ProductCardProps } from "../../types"
import '../../styles/ProductCard.css';

export default function ProductCard({ product, productId }: ProductCardProps) {

    return (
        <div className="product-card">
            {product.name}
        </div>
    )
}