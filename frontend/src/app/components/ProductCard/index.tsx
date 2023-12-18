import { Product } from '@/app/interfaces/Product';
import DefaultProductImage from '@/app/assets/images/default-products.png';
import './styles.scss';
import Image from 'next/image';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => (
  <div className="c-product-card-container">
    <Image
      height={150}
      width={320}
      className="l-position-product-image"
      src={DefaultProductImage}
      alt="Default product image"
    />
    <div className="l-product-info-flex">
      <div>
        <p className="c-product-text-highlight">{product.name}</p>
        <p className="c-product-rate">Nota: {product.rate}</p>
      </div>
      <span className="c-product-text-highlight">R$ {product.price}</span>
    </div>
  </div>
);
