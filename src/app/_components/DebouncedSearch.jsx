"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "../lib/axiosInstance";
import { FiSearch } from "react-icons/fi";

export default function DebouncedSearch() {
  const router = useRouter();
  const listRef = useRef(null);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch and filter products
  useEffect(() => {
    if (!debouncedQuery) {
      setSearchResults([]);
      setHighlightIndex(-1);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/products");
        const normalizedQuery = debouncedQuery.trim().toLowerCase();
        const filtered = res.data.filter((product) =>
          product.title.toLowerCase().includes(normalizedQuery)
        );
        setSearchResults(filtered);
        setHighlightIndex(filtered.length > 0 ? 0 : -1); // highlight first item
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery]);

  // Navigate to a product
  const goToProduct = (product) => {
    if (!product) return;
    setQuery(product.title);
    setSearchResults([]);
    router.push(`/products/${product.id}`);
  };

  // Handle search icon or Enter
  const handleSearch = () => {
    if (highlightIndex >= 0 && searchResults[highlightIndex]) {
      goToProduct(searchResults[highlightIndex]);
    } else if (searchResults.length > 0) {
      goToProduct(searchResults[0]);
    } else {
      alert("Product not found");
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => {
        const next = prev + 1 < searchResults.length ? prev + 1 : prev;
        scrollToItem(next);
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => {
        const next = prev - 1 >= 0 ? prev - 1 : 0;
        scrollToItem(next);
        return next;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  // Scroll highlighted item into view
  const scrollToItem = (index) => {
    const ul = listRef.current;
    if (!ul) return;
    const item = ul.children[index];
    if (item) {
      item.scrollIntoView({ block: "nearest" });
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border rounded p-2 pr-10 w-full focus:outline-blue-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <FiSearch size={18} />
        </button>
      </div>

      {loading && <div className="absolute right-10 top-2 text-sm">...</div>}

      {searchResults.length > 0 && (
        <ul
          ref={listRef}
          className="absolute top-12 left-0 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto z-50"
        >
          {searchResults.map((product, index) => (
            <li
              key={product.id}
              className={`p-2 cursor-pointer ${
                index === highlightIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onClick={() => goToProduct(product)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
