import { createContext, useState } from "react";

interface CartProviderProps {
    children: React.ReactNode
}

interface product {
    id: string
    name: string
    imageUrl: string
    price: string
    quantity: 1
    defaultPriceId: string
}

interface CartContextData {
    products: product[],
    addProductToCart: (product: product) => void,
    removeProductFromCart: (id: string) => void,
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
    const [products, setProducts] = useState<product[]>([])

    function addProductToCart(product: product) {
        setProducts([...products, product])
    }

    function removeProductFromCart(id: string) {
        setProducts(products.filter(product => product.id !== id))
    }

        return (
            <CartContext.Provider value={{ products, addProductToCart, removeProductFromCart }}>
                {children}
            </CartContext.Provider>
        )
    }