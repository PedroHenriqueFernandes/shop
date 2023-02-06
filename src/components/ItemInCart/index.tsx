import { CartContext } from "@/src/context/CartContext";
import Image from "next/image";
import { useContext } from "react";
import { CartContent, CartImage, CartItem, InfoProductContainer, Title } from "./styles";

export function ItemInCart() {
    const { products, removeProductFromCart } = useContext(CartContext)

    function handleRemoveItemFromCart(id: string) {
        removeProductFromCart(id)
        return true
    }

    return (
        <CartContent>
            {products.map(product => (
                <CartItem key={product.id}>
                    <CartImage>
                        <Image src={product.imageUrl} width={100} height={100} alt="" />
                    </CartImage>

                    <InfoProductContainer>
                        <div>
                            <Title>{product.name}</Title>
                            <span>{product.price}</span>
                        </div>
                        <button onClick={() => {handleRemoveItemFromCart(product.id)}}>Remover</button>
                    </InfoProductContainer>

                </CartItem>
            ))}
        </CartContent>

    )
}