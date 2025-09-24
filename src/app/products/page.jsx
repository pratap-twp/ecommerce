"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../react-redux/slices/cartSlice";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

 
  useEffect(() => {
    console.log(" Cart updated:", cart);
  }, [cart]);

  return (
     <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Products
      </h1>

      <ul className="flex flex-wrap gap-6 justify-center list-none p-0 m-0">
        {products.map((p) => (
          <li
            key={p.id}
            className="bg-white rounded-xl shadow-md p-4 text-center transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl w-[250px] h-[380px] flex flex-col justify-between"
          >
            <img
              src={p.image}
              alt={p.title}
              className="max-w-[120px] h-[150px] object-contain mx-auto"
            />

            <h2 className="text-base font-semibold text-gray-900 mt-3 line-clamp-2">
              {p.title}
            </h2>

            <p className="text-lg font-bold text-blue-600 mt-2">
              Price: ${p.price}
            </p>

            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => handleAddToCart(p)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Add to cart
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors cursor-pointer">
                Buy Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
