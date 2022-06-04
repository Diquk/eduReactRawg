import React, { useState } from 'react';
import InputTypeSearch from '../input/input_type_search';
import '../button/button.scss';
import './search-form.scss';

function SearchForm(props) {

  const [text, setText] = useState("");

  function changeText(value) {
    setText(value.text);
  }

  return (
    <form className={`${props.className} search-form`} method="GET" action="">
      <div className="search-form__container">
        <InputTypeSearch value={text} onChange={changeText}/>
        <button type="submit"
        className="button button_type_search">
          <div className="button__img"></div>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;