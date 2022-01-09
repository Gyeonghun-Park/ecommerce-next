import { ReactNode } from 'react';
import s from './ProductSlider.module.scss';

interface Props {
  children: ReactNode;
}

function ProductSlider({ children }: Props) {
  return (
    <div className={s.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
}

export default ProductSlider;
