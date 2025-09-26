
"use client"
import Link from "next/link"

// export default function Home() {
//   return (

//   )
// }


import { useEffect, useState } from "react"
import Image from "next/image"
import axiosInstance from "./lib/axiosInstance" 

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await axiosInstance.get("/products?limit=8")
      setProducts(res.data)
    } catch (err) {
      setError("Failed to fetch products. Please try again.")
      console.error("API Error:", err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
<div className="flex flex-col mt-10 px-6">
      
      {/* Banner */}
      {/* <div className="mx-auto w-full">
        <Image
          src="/banner.jpg"    
          alt="Hero image"    
          width={1400}       
          height={200}        
          priority  
          className="rounded-lg  object-contain"
        />
      </div> */}

     <div className="mx-auto max-w-7xl px-4">
  {/* Products Section */}
  <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800 text-center md:text-left">
    Upcoming Products
  </h2>

  {loading && <p className="text-gray-500">⏳ Loading products...</p>}
  {error && <p className="text-red-600 font-medium">{error}</p>}

  {/* Responsive Flexbox */}
  <div className="flex flex-wrap justify-center md:justify-start gap-6 pb-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white shadow-md rounded-lg border hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-[350px]"
      >
        {/* Product Image */}
        <div className="p-4 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-[150px] w-auto"
          />
        </div>

        {/* Product Info */}
        <div className="px-4 flex-1 flex flex-col">
          <h3 className="text-md font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-green-600 font-bold text-lg mt-1">
            Price: ₹{product.price}
          </p>
        </div>

        {/* Fixed Button */}
        <div className="p-4">
          <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
            View
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom Section */}
  <div className="mt-10 text-center">
    <h1 className="text-2xl font-bold text-gray-800">
      Welcome to Store Demo
    </h1>
    <Link
      href="/products"
      className="inline-block mt-4 border px-6 py-2 rounded-full font-medium bg-amber-500 text-white hover:bg-amber-600 transition"
    >
      Browse Products
    </Link>
  </div>
</div>

    </div>
  )
}
