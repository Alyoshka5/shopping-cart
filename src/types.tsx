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
    shoppingCart: { [key: string]: number };
}

interface CartIconProps {
    shoppingCart: { [key: string]: number };
}

interface ShopPageProps {
    setShoppingCart: Function;
}

interface CartProps {
    shoppingCart: { [key: string]: number };
    setShoppingCart: Function;
}

interface CartProductRowProps {
    productId: string;
    shoppingCart: { [key: string]: number };
    setShoppingCart: Function;
}

export type { ProductCardProps, QuantityCounterProps, NavBarProps, CartIconProps, ShopPageProps, CartProps, 
              CartProductRowProps }