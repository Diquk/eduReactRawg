import React, { useState, useEffect } from 'react';
import { InputTypeSearch } from '../input/input_type_search';
import '../button/button.scss';
import './search-form.scss';
import { useSearchParams } from "react-router-dom";

export function SearchForm(props) {

  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search");

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

  useEffect(() => {
    if(searchText) {
      setSearchParams("search=" + searchText);
      setText(searchText);
      fetch(`https://api.rawg.io/api/games?key=c64dcb4fc5d943d2a5d29172c06e2088&search=${searchText}`)
        .then((json) => json.json())  
        .then((data) => {props.getData(data); props.setLoading(false);});
    }
  }, [searchText])

  

  function changeText(value) {
    setText(value.target.value);
  }

  function handleSubmit(e) {
    e && e.preventDefault();
    props.setLoading(true);
    setSearchParams("search=" + text);
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