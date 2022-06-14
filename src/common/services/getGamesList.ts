import { baseFetch } from "common/services/baseFetch";

export const getGamesList = (
    searchText: string | null, 
    orderingText: string | null, 
    setSearchParams: (a: URLSearchParams) => void, 
    setText: (a: string) => void, 
    setNewURL: (a: string | null, b: string | null, c: string | null) => URLSearchParams) => {
  let newURL = setNewURL("", searchText, orderingText);
  setSearchParams(newURL);
  searchText && setText(searchText);
  return baseFetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&${newURL}`);
}