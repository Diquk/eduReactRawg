import "common/components/header/header.scss";
import "common/components/companyName/companyName.scss";
import "common/components/link/link.scss";

import { SearchForm } from "common/services/searchForm/searchForm";

export const Header = ({gamesData, getGamesData, searchString, setSearch, setLoadingData}) => {
  return (
    <header className="header">
      <a href="#" className="company-name header__company-name link">Games DB</a>
      <SearchForm className="header__search-form" 
      gamesData={gamesData}
      getGamesData={getGamesData}
      searchString={searchString}
      setSearch={setSearch}
      setLoadingData={setLoadingData}/>
    </header>
  );
}