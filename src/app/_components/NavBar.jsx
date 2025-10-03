"use client";

import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import DebouncedSearch from "./DebouncedSearch";

const linkClasses =
  "text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 hover:-translate-y-0.5 transform";

export default function NavBar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { data: session } = useSession();

  return (
    <nav className=" flex items-center px-6 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      {/* Left links */}
      <div className="flex items-center gap-6 flex-shrink-0">
        <Link href="/" className={linkClasses}>Home</Link>
        <Link href="/products" className={linkClasses}>Products</Link>
        <Link href="/about" className={linkClasses}>About</Link>
      </div>

      {/* Centered search */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[400px] max-w-full">
        <DebouncedSearch />
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-4 flex-shrink-0">
        <Link href="/cart" className="relative">
          <FaCartArrowDown size={24} />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

        {!session ? (
          <div className="flex items-center gap-4">
            <Link href="/login" className={linkClasses}>Login</Link>
            <Link href="/signUp" className={linkClasses}>Sign Up</Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200"
            >
              Logout
            </button>
            <span className="text-sm font-semibold text-gray-700">
              {session.user?.name || "User"}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
