import { EArrowDirection } from 'project/gameDetails/enums/EArrowDirection';

interface SliderArrowPorps {
  currentPosition: number;
  changePosition: (position: number) => void;
  direction: EArrowDirection;
  isActive: boolean;
}

export const SliderArrow = ({
  currentPosition,
  changePosition,
  direction,
  isActive,
}: SliderArrowPorps) => {
  const setClassName = (
    arrowName: string,
    isState: boolean
  ): string => {
    return `slider__arrow slider__arrow_${arrowName} slider__arrow_${
      isState ? 'active' : 'deactive'
    }`;
  };

  const onArrowClick = () => {
    if (isActive) {
      direction === EArrowDirection.Left
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
