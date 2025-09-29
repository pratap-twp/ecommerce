
"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../react-redux/slices/cartSlice";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          addToCart({
            id: String(product.id),
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: 1,
          })
        )
      }
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer"
    >
      Add to Cart
    </button>
  ); 
}

