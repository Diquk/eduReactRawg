import { OrderButton } from "../orderButton/orderButton";
import "./orderButtons.scss";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const OrderButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  let [checkedOrder, setChekedOrder] = useState(searchParams.get("ordering"));

  const listOrders = ["name", "released", "metacritic"];

  const listOrdersButtons = listOrders.map((orderName) =>
    <OrderButton orderName={orderName} 
      key={orderName} 
      checkedOrder={checkedOrder}/>
  );

  //Set active radio buton on url change
  useEffect(() => {
    if(searchParams.get("ordering")) {
      console.log(listOrdersButtons);
      setChekedOrder(searchParams.get("ordering"));
    }
  }, [searchParams]);

  //Change url on radio button click
  function changeHandler(e) {
    if (searchParams.get("search")) {
      let newSearchUrl = new URLSearchParams();
      newSearchUrl.set("search", searchParams.get("search"));
      newSearchUrl.set("ordering", e.target.value);
      setSearchParams(newSearchUrl);
    } else {
      let newSearchUrl = new URLSearchParams();
      newSearchUrl.set("ordering", e.target.value);
      console.log(newSearchUrl.get("ordering"));
      setSearchParams(newSearchUrl);
    }
  }

  return(
    <div className="order-buttons" onChange={changeHandler}>
      {listOrdersButtons}
    </div>
  );
}