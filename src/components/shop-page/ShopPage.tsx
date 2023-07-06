import products from './products';
import ProductCard from './ProductCard';

export default function ShopPage() {

    return (
        <div className="shop-page">
            <h1>shop</h1>
            { products.map((product, productId) => {
                return (
                    <ProductCard product={product} productId={productId} key={productId} />
                )
            })}
        </div>
    )
}