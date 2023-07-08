import products from './products';
import ProductCard from './ProductCard';
import '../../styles/ShopPage.css';
import { ShopPageProps } from '../../types';

export default function ShopPage({ setShoppingCart }: ShopPageProps) {

    return (
        <div className="shop-page">
            <div className='products'>
                { products.map((product, productId) => {
                    return (
                        <ProductCard product={product} productId={productId} key={productId} setShoppingCart={setShoppingCart} />
                    )
                })}
            </div>
        </div>
    )
}