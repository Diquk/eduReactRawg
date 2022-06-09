export const getGamesList = (searchText, orderingText, setSearchParams, setText, setNewURL) => {
  let newURL = setNewURL("", searchText, orderingText);
  setSearchParams(newURL);
  searchText && setText(searchText);
  return fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088&${newURL}`)
          .then((json) => json.json())  
          .then((data) => data)
}