export const getGameGenres = (gameGenres) => {
  return gameGenres && gameGenres.map(item => item.name).join(" ");
}