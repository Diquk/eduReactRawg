export const getInitialGamesList = () => {
  return fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088`)
          .then((json) => json.json())  
          .then((data) => data)
}