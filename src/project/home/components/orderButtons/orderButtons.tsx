import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import 'project/home/components/orderButtons/orderButtons.scss';

import { OrderButton } from 'project/home/components/orderButton/orderButton';

export const OrderButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  let [checkedOrder, setChekedOrder] = useState(
    searchParams.get('ordering')
  );

  const listOrders = ['name', 'released', 'metacritic'];

  const listOrdersButtons = listOrders.map((orderName) => (
    <OrderButton
      orderName={orderName}
      key={orderName}
      checkedOrder={checkedOrder}
    />
  ));

  //Set active radio button on url change
  useEffect(() => {
    if (searchParams.get('ordering')) {
      setChekedOrder(searchParams.get('ordering'));
    }
  }, [searchParams]);

  //Change url on radio button click
  function onOrderRadioChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
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

  return (
    <div className="order-buttons" onChange={onOrderRadioChange}>
      {listOrdersButtons}
    </div>
  );
};
