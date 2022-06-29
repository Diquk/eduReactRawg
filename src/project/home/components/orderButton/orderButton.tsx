import 'project/home/components/orderButton/orderButton.scss';

interface OrderButtonProps {
  orderName: string;
  checkedOrder: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrderButton = ({
  orderName,
  checkedOrder,
  onChange,
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
        onChange={onChange}
      />
      <label htmlFor={orderName} className="order-button__name">
        {orderName}
      </label>
    </div>
  );
};
