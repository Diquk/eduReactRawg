import { baseFetch } from "common/services/baseFetch";

export const getGameScreenshots = (gameId: string) => {
  return baseFetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.REACT_APP_KEY}`);
}