import { GameGenre } from "interfaceses";

export const getGameGenres = (gameGenres?: GameGenre[] | null) => {
  return gameGenres && gameGenres.map(item => item.name).join(" ");
}