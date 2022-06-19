import { useState } from 'react';

import 'project/gameDetails/components/slider/slider.scss';

import { SliderArrow } from 'project/gameDetails/components/slider/sliderArrow/sliderArrow';
import { SliderContent } from 'project/gameDetails/components/slider/sliderContent/sliderContent';
import {
  GameScreenshot,
  GameVideo,
} from 'project/gameDetails/models/gameModels';
import { ESliderContentTypes } from 'project/gameDetails/enums/ESliderContentTypes';
import { EArrowDirection } from 'project/gameDetails/enums/EArrowDirection';

interface ImageContent {
  tag: ESliderContentTypes.Images;
  arrayOfContent: GameScreenshot[];
}

interface VideoContent {
  tag: ESliderContentTypes.Videos;
  arrayOfContent: GameVideo[];
}

type SliderProps = ImageContent | VideoContent;

export const Slider = ({ arrayOfContent, tag }: SliderProps) => {
  const [position, setPosition] = useState(0);
  const listOfContent =
    arrayOfContent?.map((item, index) => {
      return tag === ESliderContentTypes.Images ? (
        <SliderContent
          position={index}
          currentPosition={position}
          key={index}
        >
          <img
            src={(item as GameScreenshot).image}
            className="slider__img"
            alt="screenshot"
          />
        </SliderContent>
      ) : tag === ESliderContentTypes.Videos ? (
        <SliderContent
          position={index}
          currentPosition={position}
          key={index}
        >
          <video className="slider__video" controls muted>
            <source src={(item as GameVideo).data[480]} />
          </video>
        </SliderContent>
      ) : null;
    }) ?? [];

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <SliderArrow
          currentPosition={position}
          changePosition={setPosition}
          direction={EArrowDirection.Left}
          isActive={arrayOfContent && position > 0}
        />
        {listOfContent}
        <SliderArrow
          currentPosition={position}
          changePosition={setPosition}
          direction={EArrowDirection.Right}
          isActive={
            arrayOfContent && position < arrayOfContent.length - 1
          }
        />
      </div>
    </div>
  );
};
