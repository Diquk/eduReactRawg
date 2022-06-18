import { RawgResponse } from "common/models/interfaces";
import { EVideoQuality } from "../enums/EVideoQuality";

export interface GameScreenshots extends RawgResponse<GameScreenshot> {}

export interface GameVideos extends RawgResponse<GameVideo> {}

export interface GameScreenshot {
  image: string;
}

export type GameVideo = {
  data: {
    [key in EVideoQuality]: string;
  };
}
