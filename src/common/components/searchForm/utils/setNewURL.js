export const setNewURL = (text, searchText, orderingText) => {
  let newSearchUrl = new URLSearchParams();
  text && newSearchUrl.set("search", text);
  text || searchText && newSearchUrl.set("search",searchText);
  orderingText && newSearchUrl.set("ordering", orderingText);
  
  return newSearchUrl;
}