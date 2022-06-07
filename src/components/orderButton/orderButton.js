import "./orderButton.scss";

export const OrderButton = (props) => {
  return(
    <div className="order-button">
      <input type="radio" 
      id={props.order} 
      name="order" 
      value={props.orderName}
      className="order-button__input"/>
      <label for={props.order} className="order-button__name">
        {props.orderName}
      </label>
    </div>
  );
} 