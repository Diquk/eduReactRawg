import { baseFetch } from 'common/services/baseFetch';

export const getInitialGamesList = () => {
  return baseFetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`
  );
};
