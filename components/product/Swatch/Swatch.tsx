import cn from 'classnames';
import s from './Swatch.module.scss';
import { Check } from '@components/icons';
import { isDark } from '@lib/color';

interface Props {
  color?: string;
  label?: string;
  active?: boolean;
  variant?: 'size' | 'color' | string;
  onClick: () => void;
}

function Swatch({ color, label, variant, active, ...rest }: Props) {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === 'size',
    [s.dark]: color && isDark(color),
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  );
}

export default Swatch;
