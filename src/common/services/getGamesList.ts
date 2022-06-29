import { GamesData } from 'common/models/interfaces';
import { baseFetch } from 'common/services/baseFetch';
import { GetGamesListArgs } from 'common/models/interfaces';

export const getGamesList = ({
  searchText,
  orderingText,
  setSearchParams,
  setText,
  setNewURL,
}: GetGamesListArgs): Promise<GamesData> => {
  let newURL = setNewURL(searchText, orderingText);
  setSearchParams(newURL);
  searchText && setText(searchText);
  return baseFetch<GamesData>(
    `${process.env.REACT_APP_BASEURL}games?key=${process.env.REACT_APP_KEY}&${newURL}`
  );
};
