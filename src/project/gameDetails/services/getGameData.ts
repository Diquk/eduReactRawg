import { baseFetch } from 'common/services/baseFetch';

export const getGameData = (gameId: string) => {
  return baseFetch(
    `https://api.rawg.io/api/games/${gameId}?key=${process.env.REACT_APP_KEY}`
  );
};
