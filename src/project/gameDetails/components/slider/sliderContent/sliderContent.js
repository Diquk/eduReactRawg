import { useState, useEffect } from "react";

export const SliderContent = ({children, position, currentPosition}) => {
  let [style, setStyle] = useState(null);

  useEffect(() => {
    setStyle(setStyleCustom());
  }, [currentPosition]);

  function setPositionClassName() {
    let positionClassName;
    if (position === currentPosition) 
      positionClassName = "slider__content_active";
    else
      positionClassName = "slider__content_deactive";
    
    return positionClassName;
  }

  function setStyleCustom() {
    if (position > currentPosition)
      return {
        "transform": 'translateX(200%)',
      };
    else if (position < currentPosition)
      return {
        "transform": `translateX(-200%)`,
        
      }
    else
      return {
        //"animation": "show 1s 1",
        //"animationFillMode": "forwards",
      };
  }

  return (
    <div className={"slider__content " + setPositionClassName()}
        style={style}>
      {children}
    </div>
  );
}