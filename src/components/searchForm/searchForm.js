import React, { useState, useEffect } from "react";
import { InputTypeSearch } from "../input/inputTypeSearch";
import "../button/button.scss";
import "./searchForm.scss";
import { useSearchParams } from "react-router-dom";

export const SearchForm = (props) => {

  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search");
  const orderingText = searchParams.get("ordering");

  useEffect(() => {
    if (!searchText) {
      props.setLoading(true);
      fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088`)
        .then((json) => json.json())  
        .then((data) => {props.getData(data); props.setLoading(false)})
      console.log("first fetch");
    }

    return () => {
      console.log("unmounted");
    };

  }, []);

  //fetch data on url change
  useEffect(() => {
    if(searchText || orderingText) {
      setSearchParams(setNewURL());
      searchText && setText(searchText);
      props.setLoading(true);
      fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088&${setNewURL()}`)
        .then((json) => json.json())  
        .then((data) => {props.getData(data); props.setLoading(false);});
    }
  }, [searchText, orderingText])

  function setNewURL(text) {
    let newSearchUrl = new URLSearchParams();
    text && newSearchUrl.set("search", text);
    text || searchText && newSearchUrl.set("search",searchText);
    orderingText && newSearchUrl.set("ordering", orderingText);
    
    return newSearchUrl;
  }
  

  function changeText(value) {
    setText(value.target.value);
  }

  //Change url on submit
  function handleSubmit(e) {
    e && e.preventDefault();
    props.setLoading(true);
    setSearchParams(setNewURL(text));
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