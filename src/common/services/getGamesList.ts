import { GamesData } from "common/models/interfaces";
import { baseFetch } from "common/services/baseFetch";

export const getGamesList = (
    searchText: string | null, 
    orderingText: string | null, 
    setSearchParams: (searchParams: URLSearchParams) => void, 
    setText: (text: string) => void, 
    setNewURL: (searchText: string | null, orderingText: string | null) => URLSearchParams):Promise<GamesData> => {
  let newURL = setNewURL(searchText, orderingText);
  setSearchParams(newURL);
  searchText && setText(searchText);
  return baseFetch<GamesData>(`${process.env.REACT_APP_BASEURL}games?key=${process.env.REACT_APP_KEY}&${newURL}`);
}