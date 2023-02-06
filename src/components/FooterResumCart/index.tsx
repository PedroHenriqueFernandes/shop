import { CartContext } from "@/src/context/CartContext";
import axios from "axios";
import { useContext, useState } from "react";
import { Button, TextAmount, TextContainer, TextInLineContent, TextPrice, TextRegular } from "./styles";

export function FooterResumCart() {
    const { products } = useContext(CartContext)
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const total = products.reduce((acc, curr) => acc + Number(curr.price.split('R$').pop()?.replace(',', '.')), 0)
    const totalFormated = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                products: products
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout')
        }
    }

    return (
        <div>
            <TextContainer>
                <TextInLineContent>
                    <TextRegular>
                        Quantidade
                    </TextRegular>
                    <TextRegular>
                        {products.length != 1 ? `${products.length} itens` : `${products.length} item`}
                    </TextRegular>
                </TextInLineContent>

                <TextInLineContent>
                    <TextAmount>
                        Valor total
                    </TextAmount>
                    <TextPrice>
                        {totalFormated}
                    </TextPrice>
                </TextInLineContent>
            </TextContainer>


            <Button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</Button>
        </div>
    )
}