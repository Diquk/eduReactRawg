export const setNewURL = (
    text: string | null, 
    searchText: string | null, 
    orderingText: string| null): URLSearchParams => {
  let newSearchUrl = new URLSearchParams();
  text && newSearchUrl.set("search", text);
  text || searchText && newSearchUrl.set("search",searchText);
  orderingText && newSearchUrl.set("ordering", orderingText);
  
  return newSearchUrl;
}