'use client'

import { Product } from '@/app/interfaces/Product'
import './styles.scss'
import { ProductCard } from '../ProductCard'
import {  useQuery } from 'react-query'

export const ProductsSection = (props) => {
  console.log(props)
  // @ts-ignore
  const { data: products, isLoading } = useQuery(["/products"]);
  console.log(products)
  if(isLoading) return
  return (
  <section className='l-max-width'>
    <h2 className='c-products-title'>PRODUTOS</h2>
    <section className='l-flex-products-container'>
      {products!.map((product: Product) => <ProductCard product={product}/>)}
    </section>
  </section>
)}