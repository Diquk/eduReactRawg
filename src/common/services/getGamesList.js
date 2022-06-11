import { baseFetch } from "common/services/baseFetch";

export const getGamesList = (searchText, orderingText, setSearchParams, setText, setNewURL) => {
  let newURL = setNewURL("", searchText, orderingText);
  setSearchParams(newURL);
  searchText && setText(searchText);
  return baseFetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&${newURL}`);
}