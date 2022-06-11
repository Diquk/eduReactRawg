import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import "common/components/button/button.scss";
import "common/components/searchForm/searchForm.scss";

import { InputTypeSearch } from "common/components/input/inputTypeSearch";
import { setNewURL } from "common/components/searchForm/utils/setNewURL";
import { getInitialGamesList } from "common/services/getInitialGamesList";
import { getGamesList } from "common/services/getGamesList";

export const SearchForm = ({getGamesData, setLoadingData, className}) => {

  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchText = searchParams.get("search");
  const orderingText = searchParams.get("ordering");

  useEffect(() => {
    if (!searchText) {
      setLoadingData(true);
      getInitialGamesList()
        .then(data => {getGamesData(data); setLoadingData(false)})
    }
  }, []);

  //fetch data on url change
  useEffect(() => {
    if(searchText || orderingText) {
      setLoadingData(true);
      getGamesList(searchText, orderingText, setSearchParams, setText, setNewURL)
        .then(data => {getGamesData(data); setLoadingData(false)})
    }
  }, [searchText, orderingText])

  const onChangeTextInInput = (value) => {
    setText(value.target.value);
  }

  //Change url on submit
  const handleSubmit = (e) => {
    e && e.preventDefault();
    setLoadingData(true);
    navigate("/home?" + setNewURL(text, searchText, orderingText).toString());
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