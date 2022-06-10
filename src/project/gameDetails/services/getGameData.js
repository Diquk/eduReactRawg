import { baseFetch } from "common/services/baseFetch";

export const getGameData = (gameId) => {
  return baseFetch(`https://api.rawg.io/api/games/${gameId}?key=c64dcb4fc5d943d2a5d29172c06e2088`);
}