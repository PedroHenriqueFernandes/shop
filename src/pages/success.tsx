import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { SuccessContainer, ImageContainer, ImagesContainer } from "../styles/pages/success";

interface SucessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }[]
}

export default function Success({ customerName, product }: SucessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Shop</title>

                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <SuccessContainer>
                <h1>Compra efetuada</h1>


                <ImagesContainer>
                    {product.map(product => (
                        <ImageContainer key={product.name}>
                            <Image
                                src={product.imageUrl}
                                width={120}
                                height={110}
                                alt=""
                            />
                        </ImageContainer>
                    ))}
                </ImagesContainer>

                <p>
                    {product.length > 1 ? (
                        <>
                            Uhuul <strong>{customerName}</strong>, seus <strong>{
                                product.map(product => `${product.name}, `)
                            }</strong> já estão a caminho da sua casa.
                        </>
                    ) : (
                        <>
                            Uhuul <strong>{customerName}</strong>, seu <strong>{
                                product.map(product => `${product.name} `)
                            }</strong> já está a caminho da sua casa.
                        </>
                    )
                    }
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>

            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }

    }
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details!.name
    const products = session.line_items!.data.map(item => item.price!.product as Stripe.Product)
    return {
        props: {
            customerName,
            product: products.map(product => {
                return {
                    name: product.name,
                    imageUrl: product.images![0]

                }
            })
        }
    }
}