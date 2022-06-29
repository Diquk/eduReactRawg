import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import 'project/home/components/orderButtons/orderButtons.scss';

import { OrderButton } from 'project/home/components/orderButton/orderButton';

export const OrderButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  let [checkedOrder, setChekedOrder] = useState(
    searchParams.get('ordering')
  );

  //Change url on radio button click
  function onOrderRadioChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    let newSearchUrl = new URLSearchParams();
    newSearchUrl.set('ordering', e.target.value);
    let searchText = searchParams.get('search');
    if (searchText) {
      newSearchUrl.set('search', searchText);
      setSearchParams(newSearchUrl);
    } else {
      setSearchParams(newSearchUrl);
    }
  }

  const listOrders = ['name', 'released', 'metacritic'];

  const listOrdersButtons = listOrders.map((orderName) => (
    <OrderButton
      orderName={orderName}
      key={orderName}
      checkedOrder={checkedOrder}
      onChange={onOrderRadioChange}
    />
  ));

  //Set active radio button on url change
  useEffect(() => {
    if (searchParams.get('ordering')) {
      setChekedOrder(searchParams.get('ordering'));
    } else {
      setChekedOrder(null);
    }
  }, [searchParams]);

  return <div className="order-buttons">{listOrdersButtons}</div>;
};
