import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'common/components/button/button.scss';
import 'common/components/searchForm/searchForm.scss';

import { InputTypeSearch } from 'common/components/input/inputTypeSearch';
import { setNewURL } from 'common/components/searchForm/utils/setNewURL';
import { getInitialGamesList } from 'common/services/getInitialGamesList';
import { getGamesList } from 'common/services/getGamesList';
import { GamesData } from 'common/models/interfaces';
import {
  setLoadingTrue,
  setLoadingFalse,
} from 'common/slices/loadingSlice';
import { setGames } from 'project/home/slices/gamesSlice';

interface SearchFormProps {
  className: string;
}

export const SearchForm = ({ className }: SearchFormProps) => {
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchText = searchParams.get('search');
  const orderingText = searchParams.get('ordering');

  //fetch data on url change
  useEffect(() => {
    if (searchText || orderingText) {
      dispatch(setLoadingTrue());
      getGamesList(
        searchText,
        orderingText,
        setSearchParams,
        setText,
        setNewURL
      ).then((data) => {
        dispatch(setGames(data as GamesData));
        dispatch(setLoadingFalse());
      });
    } else {
      dispatch(setLoadingTrue());
      getInitialGamesList().then((data) => {
        dispatch(setGames(data as GamesData));
        dispatch(setLoadingFalse());
      });
    }
  }, [searchText, orderingText]);

  const onChangeTextInInput = (e: React.ChangeEvent): void => {
    setText((e as React.ChangeEvent<HTMLInputElement>).target.value);
  };

  //Change url on submit
  const handleSubmit = (
    e: React.MouseEvent<HTMLFormElement>
  ): void => {
    e && e.preventDefault();
    dispatch(setLoadingTrue());
    navigate('/home?' + setNewURL(text, orderingText).toString());
  };

  return (
    <form
      className={`${className} search-form`}
      method="GET"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="search-form__container">
        <InputTypeSearch
          value={text}
          onChange={onChangeTextInInput}
        />
        <button type="submit" className="button button_type_search">
          <div className="button__img"></div>
        </button>
      </div>
    </form>
  );
};
