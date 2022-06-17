import {
  GameItem,
  GameScreenshots,
  GamesData,
  GameVideos,
} from 'interfaceses';

export const baseFetch = (
  url: string
): Promise<GamesData | GameScreenshots | GameVideos | GameItem> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request error! Status: ${response.status}`);
      }
      return response.json() as Promise<
        GamesData | GameScreenshots | GameVideos | GameItem
      >;
    })
    .then((data) => data);
};
