'use client';

import { Product } from '@/app/interfaces/Product';
import './styles.scss';
import { ProductCard } from '../ProductCard';
import { useQuery } from 'react-query';

export const ProductsSection = () => {
  const { data: products, isLoading } = useQuery<Product[]>(['/products']);

  if (isLoading) return;

  return (
    <section className="l-max-width">
      <h2 className="c-products-title">PRODUTOS</h2>
      <section className="l-flex-products-container">
        {products!.map((product: Product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </section>
    </section>
  );
};
