export const baseFetch = (url) => {
  return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Request error! Status: ${response.status}`);
            }

            return response.json();
          })  
          .then((data) => data);
}