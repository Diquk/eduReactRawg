import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "common/components/button/button.scss";
import "common/services/searchForm/searchForm.scss";

import { InputTypeSearch } from "common/components/input/inputTypeSearch";
import { setNewURL } from "common/services/searchForm/utils/setNewURL";

export const SearchForm = ({getGamesData, setLoadingData, className}) => {

  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search");
  const orderingText = searchParams.get("ordering");

  useEffect(() => {
    if (!searchText) {
      setLoadingData(true);
      fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088`)
        .then((json) => json.json())  
        .then((data) => {getGamesData(data); setLoadingData(false)})
      console.log("first fetch");
    }
  }, []);

  //fetch data on url change
  useEffect(() => {
    if(searchText || orderingText) {
      let newURL = setNewURL("", searchText, orderingText);
      setSearchParams(newURL);
      searchText && setText(searchText);
      setLoadingData(true);
      fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088&${newURL}`)
        .then((json) => json.json())  
        .then((data) => {getGamesData(data); setLoadingData(false);});
    }
  }, [searchText, orderingText])

  function onChangeTextInInput(value) {
    setText(value.target.value);
  }

  //Change url on submit
  function handleSubmit(e) {
    e && e.preventDefault();
    setLoadingData(true);
    setSearchParams(setNewURL(text, searchText, orderingText));
  }


  return (
    <form className={`${className} search-form`} method="GET" action="" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <InputTypeSearch value={text} onChange={onChangeTextInInput}/>
        <button type="submit"
        className="button button_type_search">
          <div className="button__img"></div>
        </button>
      </div>
    </form>
  );
}