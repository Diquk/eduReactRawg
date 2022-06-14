interface SliderArrowPorps {
  currentPosition: number;
  changePosition: (a: number) => void;
  direction: "left" | "right";
  isActive: boolean;
}

export const SliderArrow = ({currentPosition, changePosition, direction, isActive}: SliderArrowPorps) => {
  const setClassName = (direction: string, isActive: boolean) => {
    return `slider__arrow slider__arrow_${direction} slider__arrow_${isActive ? "active" : "deactive"}`;;
  }

  const onArrowClick = () => {
    if(isActive) { 
      direction === "left" 
        ? changePosition(currentPosition-1)
        : changePosition(currentPosition+1);
    }
  }

 
  return <div className={setClassName(direction, isActive)}
              onClick={onArrowClick}></div>
}