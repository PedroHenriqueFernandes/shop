import Image from "next/image";
import { ShoppingCart } from "phosphor-react";
import { AmountItemsInCart, CartContainer, HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { CartContext } from "@/src/context/CartContext";
import { useContext } from "react";

interface HeaderProps {
    handleShowCart: () => void;
}

export function Header({ handleShowCart }: HeaderProps) {
    const { products } = useContext(CartContext)

    return (
        <HeaderContainer>
            <Image src={logoImg.src} alt="" height={52} width={130} />
            <CartContainer onClick={handleShowCart}>
                <ShoppingCart size={32} />
                <AmountItemsInCart>{products.length}</AmountItemsInCart>
            </CartContainer>
        </HeaderContainer>
    )
}