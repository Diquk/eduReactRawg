import './header.scss';
import SearchForm from '../search-form/search-form.js';
import  '../company-name/company-name.scss';
import '../link/link.scss';

function Header(props) {
  return (
    <header className="header">
      <a href="#" className="company-name header__company-name link">Games DB</a>
      <SearchForm className="header__search-form" 
      data={props.data}
      getData={props.getData}/>
    </header>
  );
}

export default Header;