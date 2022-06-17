export interface GameItem {
  metacritic: number | null;
  name: string;
  platforms: GamePlatform[] | null;
  background_image: string | null;
  released?: string | null;
  genres?: GameGenre[] | null;
  description?: string;
  id?: number;
}

export interface GameGenre {
  name: string;
}

export interface GamesData {
  results: GameItem[];
}

export interface GameScreenshots {
  results: GameScreenshot[];
}

export interface GameVideos {
  results: GameVideo[];
}

export interface GameScreenshot {
  image: string;
}

export interface GameVideo {
  data: {
    480: string;
  };
}

export interface SetLoadingAndData {
  setGamesData: (a: GamesData) => void;
  setLoadingData: (a: boolean) => void;
}

export interface GamePlatform {
  platform: {
    name: string;
  };
}
