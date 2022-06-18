import { GameGenre } from "common/models/interfaces";

export const getGameGenres = (gameGenres?: GameGenre[] | null): string | null | undefined => {
  return gameGenres && gameGenres.map(genre => genre.name).join(" ");
}