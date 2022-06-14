import { useState, useEffect } from "react";

interface SliderContentProps {
  children: React.ReactNode;
  position: number;
  currentPosition: number;
}

type StyleObject = Record<string, string>;

export const SliderContent = ({children, position, currentPosition}: SliderContentProps) => {
  let [style, setStyle] = useState<StyleObject>({});

  useEffect(() => {
    setStyle(setStyleCustom());
  }, [currentPosition]);

  const setPositionClassName = () => {
    return `slider__content_${position === currentPosition ? "active" : "deactive"}`;
  }

  const setStyleCustom = (): StyleObject => {
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