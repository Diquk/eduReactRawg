import { useState, useEffect } from "react";

export const SliderContent = ({children, position, currentPosition}) => {
  let [style, setStyle] = useState(null);

  useEffect(() => {
    setStyle(setStyleCustom());
  }, [currentPosition]);

  const setPositionClassName = () => {
    return `slider__content_${position === currentPosition ? "active" : "deactive"}`;
  }

  const setStyleCustom = () => {
    if (position > currentPosition) {
      return {
        "transform": 'translateX(200%)',
      };
    }
    if (position < currentPosition) {
      return {
        "transform": `translateX(-200%)`,
      };
    }
    
    return {};
  }

  return (
    <div className={"slider__content " + setPositionClassName()}
        style={style}>
      {children}
    </div>
  );
}