import { useState } from "react";

import "project/gameDetails/components/slider/slider.scss";

import { SliderArrow } from "project/gameDetails/components/slider/sliderArrow/sliderArrow";
import { SliderContent } from "project/gameDetails/components/slider/sliderContent/sliderContent";
import { GameScreenshot, GameVideo } from "interfaceses";

interface ImageContent {
  tag: "img";
  arrayOfContent: GameScreenshot[];
}

interface VideoContent {
  tag: "video";
  arrayOfContent: GameVideo[];
}

type SliderProps = ImageContent | VideoContent;

export const Slider = ({arrayOfContent, tag}: SliderProps) => {
  let [position, setPosition] = useState(0);
  const listOfContent = arrayOfContent?.map((item, index) => {
    return tag === "img" ? 
            <SliderContent position={index} currentPosition={position} key={index}>
                <img src={(item as GameScreenshot).image} className="slider__img"/>
            </SliderContent> :
            tag === "video" ?
            <SliderContent position={index} currentPosition={position} key={index}>
              <video className="slider__video" controls muted>
                <source src={(item as GameVideo).data[480]}/>
              </video>
            </SliderContent> : null;
  }) ?? []

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <SliderArrow currentPosition={position}
          changePosition={setPosition} 
          direction="left"
          isActive={arrayOfContent && position > 0}/>
        {listOfContent}
        <SliderArrow currentPosition={position}
          changePosition={setPosition}
          direction="right"
          isActive={arrayOfContent && position < arrayOfContent.length-1}/>
        </div>
    </div>
  );
}