import { useState, useEffect, useRef } from "react";

import "project/gameDetails/components/slider/slider.scss";

import { SliderArrow } from "project/gameDetails/components/slider/sliderArrow/sliderArrow";
import { SliderContent } from "project/gameDetails/components/slider/sliderContent/sliderContent";

export const Slider = ({arrayOfContent, tag}) => {
  let [position, setPosition] = useState(0);
  const listOfContent = tag === "img" ? arrayOfContent?.map((item, index) => {
    return <SliderContent position={index} currentPosition={position} key={index}>
      <img src={item.image} className="slider__img"/>
    </SliderContent>
  }) ?? [] 
    : tag === "video" 
    ? arrayOfContent?.map((item, index) => {
      
      return <SliderContent position={index} currentPosition={position} key={index}>
        <video className="slider__video" controls muted>
          <source src={item.data[480]}/>
        </video>
      </SliderContent>
  }) ?? [] : null;

  useEffect(() => {

  }, [position]);

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <SliderArrow currentPosition={position}
          totalLength={arrayOfContent?arrayOfContent.length:0}
          changePosition={setPosition} 
          direction="left"
          isActive={arrayOfContent && position > 0}/>
        {listOfContent}
        <SliderArrow currentPosition={position}
          totalLength={arrayOfContent?arrayOfContent.length:0}
          changePosition={setPosition}
          direction="right"
          isActive={arrayOfContent && position < arrayOfContent.length-1}/>
        </div>
    </div>
  );
}