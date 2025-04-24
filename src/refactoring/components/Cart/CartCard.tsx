import { CartItem } from "../../../types";

interface Props {
  cartItem: CartItem;
  appliedDiscount: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartCard = ({
  cartItem,
  appliedDiscount,
  updateQuantity,
  removeFromCart,
}: Props) => {
  const handleIncreaseQuantity = () => {
    updateQuantity(cartItem.product.id, cartItem.quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    updateQuantity(cartItem.product.id, cartItem.quantity + 1);
  };

  return (
    <div
      key={cartItem.product.id}
      className="flex justify-between items-center bg-white p-3 rounded shadow"
    >
      <div>
        <span className="font-semibold">{cartItem.product.name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {cartItem.product.price}원 x {cartItem.quantity}
          {appliedDiscount > 0 && (
            <span className="text-green-600 ml-1">
              ({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
            </span>
          )}
        </span>
      </div>
      <div>
        <button
          onClick={handleDecreaseQuantity}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          -
        </button>
        <button
          onClick={handleIncreaseQuantity}
          className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(cartItem.product.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
};
