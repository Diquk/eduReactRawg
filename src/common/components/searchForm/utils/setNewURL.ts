export const setNewURL = (
  searchText: string | null,
  orderingText: string | null
): URLSearchParams => {
  let newSearchUrl = new URLSearchParams();
  searchText && newSearchUrl.set('search', searchText);
  orderingText && newSearchUrl.set('ordering', orderingText);

  return newSearchUrl;
};
