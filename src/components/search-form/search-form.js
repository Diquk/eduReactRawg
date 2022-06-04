import React, { useState, useEffect } from 'react';
import InputTypeSearch from '../input/input_type_search';
import '../button/button.scss';
import './search-form.scss';

function SearchForm(props) {

  const [text, setText] = useState("");

  function changeText(value) {
    setText(value.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088&search=${text}`)
    .then((json) => json.json())  
    .then((data) => props.getData(data));
  }

  return (
    <form className={`${props.className} search-form`} method="GET" action="" onSubmit={handleSubmit}>
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