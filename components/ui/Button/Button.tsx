import { ReactNode, ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className, ...rest }: Props) {
  return (
    <button className={cn(s.root, className)} type="button" {...rest}>
      {children}
    </button>
  );
}

export default Button;
