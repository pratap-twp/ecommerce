"use client";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";

// Common styles
const linkClasses =
  "text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 hover:-translate-y-0.5 transform";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-8 px-8 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50 max-md:gap-4 max-md:px-4 max-md:py-3">
      <Link href="/" className={`${linkClasses} `}>
        Home
      </Link>
      <Link href="/products" className={linkClasses}>
        Products
      </Link>
      <Link href="/about" className={linkClasses}>
        About
      </Link>

      <div className="ml-auto">
        <FaCartArrowDown className="text-gray-700 text-2xl hover:text-blue-600 transition-colors cursor-pointer" />
      </div>

      <Link href="/Login">Login</Link>
      <Link href="/signUp">Sign Up</Link>
    </nav>
  );
}
