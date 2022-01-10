import { ReactNode, Children, isValidElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';
import s from './ProductSlider.module.scss';

interface Props {
  children: ReactNode;
}

function ProductSlider({ children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={s.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={instanceRef.current?.prev}
              className={cn(s.leftControl, s.control)}
            />
            <button
              onClick={instanceRef.current?.next}
              className={cn(s.rightControl, s.control)}
            />
          </>
        )}
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: cn(child.props.className, 'keen-slider__slide'),
              },
            };
          }

          return child;
        })}
      </div>
    </div>
  );
}

export default ProductSlider;
