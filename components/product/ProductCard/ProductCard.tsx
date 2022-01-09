import { Product } from '@common/types/product';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.scss';

interface Props {
  product: Product;
  variant: 'simple' | 'slim';
}
const placeholderImage = '/product-image-placeholder.svg';

function ProductCard({ product, variant }: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === 'slim' ? (
          <>
            <div className="flex absolute inset-0 z-20 justify-center items-center">
              <span className="p-3 text-xl font-bold text-white bg-black">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? 'Product image'}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? 'Product image'}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
}

ProductCard.defaultProps = {
  variant: 'simple',
};

export default ProductCard;
