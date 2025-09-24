"use client"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 pt-8 pb-4 mt-12">
    
      <div className="flex justify-between flex-wrap gap-8 pb-6">
        
       
        <div>
          <h2 className="text-2xl mb-2">Mart</h2>
          <p className="text-lg text-[#bbb]">Your favorite e-commerce store</p>
        </div>

       
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-2xl">Quick Links</h4>
          <Link href="/" className="text-[#bbb] no-underline transition-colors duration-200 hover:text-white">Home</Link>
          <Link href="/products" className="text-[#bbb] no-underline transition-colors duration-200 hover:text-white">Products</Link>
          <Link href="/about" className="text-[#bbb] no-underline transition-colors duration-200 hover:text-white">About</Link>
          <Link href="/contact" className="text-[#bbb] no-underline transition-colors duration-200 hover:text-white">Contact</Link>
        </div>

        
        <div>
          <h4 className="mb-2 text-2xl">Follow Us</h4>
          <div className="flex gap-4 text-3xl">
            <a href="#" className="text-[#bbb] transition-colors duration-200 hover:text-[#0070f3]">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#bbb] transition-colors duration-200 hover:text-[#1DA1F2]">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#bbb] transition-colors duration-200 hover:text-[#E1306C]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

  
      <div className="text-center mt-2 text-[0.85rem] text-[#777]">
        <p>© {new Date().getFullYear()} Mart. All rights reserved.</p>
      </div>
    </footer>
  )
}
