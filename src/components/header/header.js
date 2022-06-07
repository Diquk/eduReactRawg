import "./header.scss";
import { SearchForm } from "../searchForm/searchForm";
import  "../companyName/companyName.scss";
import "../link/link.scss";

export const Header = (props) => {
  return (
    <header className="header">
      <a href="#" className="company-name header__company-name link">Games DB</a>
      <SearchForm className="header__search-form" 
      data={props.data}
      getData={props.getData}
      searchString={props.searchString}
      setSearch={props.setSearch}
      setLoading={props.setLoading}/>
    </header>
  );
}