import 'project/home/components/orderButton/orderButton.scss';

interface OrderButtonProps {
  orderName: string;
  checkedOrder: string | null;
}

export const OrderButton = ({
  orderName,
  checkedOrder,
}: OrderButtonProps) => {
  return (
    <div className="order-button">
      <input
        type="radio"
        id={orderName}
        name="order"
        value={orderName}
        className="order-button__input"
        checked={checkedOrder === orderName}
      />
      <label htmlFor={orderName} className="order-button__name">
        {orderName}
      </label>
    </div>
  );
};
