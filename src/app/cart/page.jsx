"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
  decreaseQuantity
} from "../../app/react-redux/slices/cartSlice";

export default function CartPage() {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Total: {Math.round(item.quantity*item.price)}</p>

              </div>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row ">
              <button
                onClick={() => handleDecrease(item.id)} 
                className="px-3 py-1 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 cursor-pointer"
              >
                -
              </button>

              <button
                onClick={() => handleIncrease(item)}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-3 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-gray-800">
            Total Quantity: {totalQuantity}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
        </div>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
