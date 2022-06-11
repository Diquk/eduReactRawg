import { baseFetch } from "common/services/baseFetch";

export const getGameVideos = (gameId) => {
  return baseFetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${process.env.REACT_APP_KEY}`);
}