import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "common/components/orderButtons/orderButtons.scss";

import { OrderButton } from "common/components/orderButton/orderButton";

export const OrderButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  let [checkedOrder, setChekedOrder] = useState(searchParams.get("ordering"));

  const listOrders = ["name", "released", "metacritic"];

  const listOrdersButtons = listOrders.map((orderName) =>
    <OrderButton orderName={orderName} 
      key={orderName} 
      checkedOrder={checkedOrder}/>
  );

  //Set active radio button on url change
  useEffect(() => {
    if(searchParams.get("ordering")) {
      setChekedOrder(searchParams.get("ordering"));
    }
  }, [searchParams]);

  //Change url on radio button click
  function onOrderRadioChange(e) {
    let newSearchUrl = new URLSearchParams();
    newSearchUrl.set("ordering", e.target.value);
    if (searchParams.get("search")) {
      newSearchUrl.set("search", searchParams.get("search"));
      setSearchParams(newSearchUrl);
    } else {
      setSearchParams(newSearchUrl);
    }
  }

  return(
    <div className="order-buttons" onChange={onOrderRadioChange}>
      {listOrdersButtons}
    </div>
  );
}