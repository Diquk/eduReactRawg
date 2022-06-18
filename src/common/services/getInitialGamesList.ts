import { GamesData } from "common/models/interfaces";
import { baseFetch } from "common/services/baseFetch";

export const getInitialGamesList = ():Promise<GamesData> => {
  return baseFetch<GamesData>(`${process.env.REACT_APP_BASEURL}games?key=${process.env.REACT_APP_KEY}`);
}