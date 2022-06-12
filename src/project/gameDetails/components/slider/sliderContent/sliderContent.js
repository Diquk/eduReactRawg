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
    if (position === currentPosition) {
      return {};
    }
    const positionOffset = position > currentPosition ? 200 : -200;
    
    return {
      "transform": `translateX(${positionOffset}%)`,
    };
  }

  return (
    <div className={"slider__content " + setPositionClassName()}
        style={style}>
      {children}
    </div>
  );
}