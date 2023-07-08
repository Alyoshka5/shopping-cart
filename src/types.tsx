interface ProductCardProps {
    product: Product;
    productId: number;
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

export type { ProductCardProps, QuantityCounterProps }