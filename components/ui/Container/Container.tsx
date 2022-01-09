import { ComponentType, HTMLAttributes, ReactNode } from 'react';

interface Props {
  el: ComponentType<HTMLAttributes<HTMLElement>>;
  children: ReactNode;
}

function Container({ children, el: Component }: Props) {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
}

Container.defaultProps = {
  el: 'div',
};

export default Container;
