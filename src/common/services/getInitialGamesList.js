import { baseFetch } from "common/services/baseFetch";

export const getInitialGamesList = () => {
  return baseFetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088`);
}