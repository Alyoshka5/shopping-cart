import products from './products';
import ProductCard from './ProductCard';
import '../../styles/ShopPage.css';

export default function ShopPage() {

    return (
        <div className="shop-page">
            <div className='products'>
                { products.map((product, productId) => {
                    return (
                        <ProductCard product={product} productId={productId} key={productId} />
                    )
                })}
            </div>
        </div>
    )
}