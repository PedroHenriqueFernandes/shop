import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { CartContainer, CloseCartContainer, Container, TextBold } from "../styles/pages/app";


import { X } from "phosphor-react"
import { useState } from "react";
import { CartProvider } from "../context/CartContext";
import { ItemInCart } from "../components/ItemInCart";
import { FooterResumCart } from "../components/FooterResumCart";
import { Header } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showCart, setShowCart] = useState(false)

  function handleShowCart() {
    setShowCart(!showCart)
  }

  return (
    <Container>
      <CartProvider>
        <Header handleShowCart={handleShowCart} />

        <CartContainer isOpen={showCart}>
          <div>
            <CloseCartContainer>
              <X size={32} onClick={handleShowCart} />
            </CloseCartContainer>
            <TextBold>
              Sacola de compras
            </TextBold>

            <ItemInCart />
          </div>
          <FooterResumCart />
        </CartContainer>

        <Component {...pageProps} />
      </CartProvider>

    </Container>
  )
}