import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import 'common/components/button/button.scss';
import 'common/components/searchForm/searchForm.scss';

import { InputTypeSearch } from 'common/components/input/inputTypeSearch';
import { setNewURL } from 'common/components/searchForm/utils/setNewURL';
import { useAppDispatch } from 'common/hooks/reduxHooks';
import {
  fetchGamesBySearch,
  fetchInitialGames,
} from 'project/home/slices/gamesSlice';

interface SearchFormProps {
  className: string;
}

export const SearchForm = ({ className }: SearchFormProps) => {
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchText = searchParams.get('search');
  const orderingText = searchParams.get('ordering');

  //fetch data on url change
  useEffect(() => {
    if (searchText || orderingText) {
      dispatch(
        fetchGamesBySearch({
          searchText,
          orderingText,
          setSearchParams,
          setText,
          setNewURL,
        })
      );
    } else {
      dispatch(fetchInitialGames());
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
