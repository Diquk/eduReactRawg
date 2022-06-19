import { ReactChildren } from 'common/models/interfaces';
import { useState, useEffect } from 'react';

interface SliderContentProps extends ReactChildren {
  position: number;
  currentPosition: number;
}

type StyleObject = Record<string, string>;

export const SliderContent = ({
  children,
  position,
  currentPosition,
}: SliderContentProps) => {
  let [style, setStyle] = useState<StyleObject>({});

  const setStyleCustom = (): StyleObject => {
    if (position === currentPosition) {
      return {};
    }
    const positionOffset = position > currentPosition ? 200 : -200;

    return {
      transform: `translateX(${positionOffset}%)`,
    };
  };

  useEffect(() => {
    setStyle(setStyleCustom());
  }, [currentPosition]);

  const setPositionClassName = () => {
    return `slider__content_${
      position === currentPosition ? 'active' : 'deactive'
    }`;
  };

  return (
    <div
      className={'slider__content ' + setPositionClassName()}
      style={style}
    >
      {children}
    </div>
  );
};
