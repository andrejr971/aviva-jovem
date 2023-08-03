import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { CustomArrowProps } from 'react-slick';

export const SlickArrowLeft = ({
  currentSlide,
  ...props
}: CustomArrowProps) => (
  <button
    {...props}
    className={'slick-prev slick-arrow'}
    aria-hidden="true"
    type="button"
  >
    <CaretLeft size={24} />
  </button>
);

export const SlickArrowRight = ({
  currentSlide,
  ...props
}: CustomArrowProps) => (
  <button
    {...props}
    className="slick-next slick-arrow"
    aria-hidden="true"
    type="button"
  >
    <CaretRight size={24} />
  </button>
);

export const ButtonsDirection = {
  Left: SlickArrowLeft,
  Right: SlickArrowRight,
};
