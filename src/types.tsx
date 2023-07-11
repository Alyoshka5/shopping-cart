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
    shoppingCart: object;
}

interface CartIconProps {
    shoppingCart: object;
}

interface ShopPageProps {
    setShoppingCart: Function;
}

interface CartProps {
    shoppingCart: object;
}

interface CartProductRowProps {
    productId: string;
}

export type { ProductCardProps, QuantityCounterProps, NavBarProps, CartIconProps, ShopPageProps, CartProps, 
              CartProductRowProps }