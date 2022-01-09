import { ReactNode } from 'react';
import Ticker from 'react-ticker';
import s from './Marquee.module.scss';
import cn from 'classnames';

interface Props {
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

function Marquee({ variant, children }: Props) {
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === 'secondary',
  });

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
}

Marquee.defaultProps = {
  variant: 'primary',
};

export default Marquee;
