interface ProductCardProps {
    product: Product;
    productId: number;
    setShoppingCart: Function;
}

interface Product {
    name: string;
    price: number;
    rating: number;
    company: string;
    description: string[];
    imageUrl: string;
}

interface QuantityCounterProps {
    quantity: number;
    setQuantity: Function;
}

interface NavBarProps {
    shoppingCart: number[];
}

interface CartIconProps {
    shoppingCart: number[];
}

interface ShopPageProps {
    setShoppingCart: Function;
}


export type { ProductCardProps, QuantityCounterProps, NavBarProps, CartIconProps, ShopPageProps }