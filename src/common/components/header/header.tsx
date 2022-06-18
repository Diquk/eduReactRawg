import { Link } from "react-router-dom";

import "common/components/header/header.scss";
import "common/components/companyName/companyName.scss";
import "common/components/link/link.scss";

import { SearchForm } from "common/components/searchForm/searchForm";
import { SetLoadingAndData } from "common/models/interfaces";

interface HeaderProps extends SetLoadingAndData {

}

export const Header = ({setGamesData, setLoadingData}: HeaderProps) => {
  return (
    <header className="header">
      <Link to="/home" className="company-name header__company-name link">Games DB</Link>
      <SearchForm className="header__search-form" 
      setGamesData={setGamesData}
      setLoadingData={setLoadingData}/>
    </header>
  );
}