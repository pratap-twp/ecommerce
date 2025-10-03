
import axiosInstance from "../../lib/axiosInstance";
import AddToCartButton from "../../_components/CartButton";

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Fetch single product by ID
  const res = await axiosInstance.get(`/products/${id}`);
  const product = res.data;
console.log("products", product)
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-contain mx-auto"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mt-6">
            ${product.price}
          </p>
          <p className="text-2xl font-semibold text-zinc-400">Rating: {product.rating?.rate}</p>

          <div className="mt-6 flex gap-4">
            <AddToCartButton product={product} />

            <form action="/cart">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 cursor-pointer"
              >
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
