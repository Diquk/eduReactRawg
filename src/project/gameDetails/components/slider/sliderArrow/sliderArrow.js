export const SliderArrow = ({currentPosition, totalLength, changePosition, direction, isActive}) => {
  const setClassName = (direction, isActive) => {
    return `slider__arrow slider__arrow_${direction} slider__arrow_${isActive ? "active" : "deactive"}`;;
  }

  const onArrowClick = (e) => {
    if(isActive) { 
      direction === "left" 
        ? changePosition(currentPosition-1)
        : changePosition(currentPosition+1);
    }
  }

 
  return <div className={setClassName(direction, isActive)}
              onClick={onArrowClick}></div>
}