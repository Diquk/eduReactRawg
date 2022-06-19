import { baseFetch } from 'common/services/baseFetch';
import { GameScreenshots } from '../models/gameModels';

export const getGameScreenshots = (
  gameId: string
): Promise<GameScreenshots> => {
  return baseFetch<GameScreenshots>(
    `${process.env.REACT_APP_BASEURL}games/${gameId}/screenshots?key=${process.env.REACT_APP_KEY}`
  );
};
