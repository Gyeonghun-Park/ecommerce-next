import { ReactNode } from 'react';
import s from './Grid.module.scss';
import cn from 'classnames';

interface Props {
  layout: 'A' | 'B';
  children: ReactNode;
}

function Grid({ children, layout }: Props) {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  });

  return <div className={rootClassName}>{children}</div>;
}

Grid.defaultProps = {
  layout: 'A',
};

export default Grid;
