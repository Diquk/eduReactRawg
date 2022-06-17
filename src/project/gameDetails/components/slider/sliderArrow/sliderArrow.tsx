interface SliderArrowPorps {
  currentPosition: number;
  changePosition: (a: number) => void;
  direction: 'left' | 'right';
  isActive: boolean;
}

export const SliderArrow = ({
  currentPosition,
  changePosition,
  direction,
  isActive,
}: SliderArrowPorps) => {
  const setClassName = (arrowName: string, isInState: boolean) => {
    return `slider__arrow slider__arrow_${arrowName} slider__arrow_${
      isInState ? 'active' : 'deactive'
    }`;
  };

  const onArrowClick = () => {
    if (isActive) {
      direction === 'left'
        ? changePosition(currentPosition - 1)
        : changePosition(currentPosition + 1);
    }
  };

  return (
    <div
      className={setClassName(direction, isActive)}
      onClick={onArrowClick}
    ></div>
  );
};
