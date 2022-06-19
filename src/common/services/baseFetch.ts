export const baseFetch = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request error! Status: ${response.status}`);
      }
      return response.json() as Promise<T>;
    })
    .then((data) => data);
};
