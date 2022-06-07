import "./orderButton.scss";

export const OrderButton = (props) => {
  return(
    <div className="order-button">
      <input type="radio" 
        id={props.orderName} 
        name="order" 
        value={props.orderName}
        className="order-button__input"
        checked={props.checkedOrder==props.orderName}/>
      <label htmlFor={props.orderName} 
        className="order-button__name">
        {props.orderName}
      </label>
    </div>
  );
} 