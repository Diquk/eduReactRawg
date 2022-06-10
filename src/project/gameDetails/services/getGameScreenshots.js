import { baseFetch } from "common/services/baseFetch";

export function getGameScreenshots(gameId) {
  return baseFetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=c64dcb4fc5d943d2a5d29172c06e2088`);
}