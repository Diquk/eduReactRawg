export const SliderArrow = ({currentPosition, totalLength, changePosition, direction, isActive}) => {
  function setClassName(direction, isActive) {
    let className;
    direction === "left" 
      ? className = "slider__arrow slider__arrow_left slider__arrow_" + (isActive?"active":"deactive")
      : className = "slider__arrow slider__arrow_right slider__arrow_" + (isActive?"active":"deactive");
    return className;
  }

  function onArrowClick(e) {
    if(isActive) { 
      direction === "left" 
        ? changePosition(currentPosition-1)
        : changePosition(currentPosition+1);
    }
  }

 
  return <div className={setClassName(direction, isActive)}
              onClick={onArrowClick}></div>
}