import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { AddCartContainer, HomeContainer, Product } from "../styles/pages/home"

import { stripe } from "../lib/stripe"
import Stripe from "stripe"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

interface product {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
  quantity: 1
}
interface HomeProps {
  products: product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { addProductToCart } = useContext(CartContext)

  function handleAddItemToCart(product: product) {
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <AddCartContainer onClick={() => { handleAddItemToCart(product) }}>
                  <ShoppingCart size={32} />
                </AddCartContainer>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}