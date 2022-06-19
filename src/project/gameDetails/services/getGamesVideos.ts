import { baseFetch } from 'common/services/baseFetch';
import { GameVideos } from '../models/gameModels';

export const getGameVideos = (
  gameId: string
): Promise<GameVideos> => {
  return baseFetch<GameVideos>(
    `${process.env.REACT_APP_BASEURL}games/${gameId}/movies?key=${process.env.REACT_APP_KEY}`
  );
};
