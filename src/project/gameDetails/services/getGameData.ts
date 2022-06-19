import { GameItem } from 'common/models/interfaces';
import { baseFetch } from 'common/services/baseFetch';

export const getGameData = (gameId: string) => {
  return baseFetch<GameItem>(
    `${process.env.REACT_APP_BASEURL}games/${gameId}?key=${process.env.REACT_APP_KEY}`
  );
};
