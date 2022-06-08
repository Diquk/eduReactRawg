import "common/components/orderButton/orderButton.scss";

export const OrderButton = ({orderName, checkedOrder}) => {
  return(
    <div className="order-button">
      <input type="radio" 
        id={orderName} 
        name="order" 
        value={orderName}
        className="order-button__input"
        checked={checkedOrder===orderName}/>
      <label htmlFor={orderName} 
        className="order-button__name">
        {orderName}
      </label>
    </div>
  );
} 