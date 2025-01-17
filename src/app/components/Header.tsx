
"use client"
import { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the mobile menu

  return (
    <header>
      <nav className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white sm:px-10 lg:w-full mx-auto">
        
        {/* Top Header */}
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          <h1 className="text-[#22202E] text-2xl font-semibold p-6 sm:p-0">Avion</h1>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center gap-3 sm:hidden">
            <MdMenu
              className="text-2xl cursor-pointer mr-6"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
            />
          </div>

          {/* Desktop icons (Search, Cart, Profile) */}
          <div className="text-xl gap-3 items-center hidden sm:flex">
          <Link
                href="/about"
                className="text-[#726E8D] text-[8px] md:text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-[#726E8D] text-[8px] md:text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                Contact
              </Link>
              <Link
                href="/product"
                className="text-[#726E8D] text-[8px] md:text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                Product List
              </Link>
            <IoSearch className="text-xl" />
            <MdOutlineShoppingCart className="text-xl" />
            <CgProfile className="text-xl" />
          </div>
        </div>

        {/* Mobile Menu (Shows when menuOpen is true) */}
        {menuOpen && (
          <div className="sm:hidden w-full bg-white shadow-md z-10">
            <div className="flex flex-col items-center py-6">
              <Link
                href="/about"
                className="text-[#726E8D] text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-[#726E8D] text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                Contact
              </Link>
              <Link
                href="/product"
                className="text-[#726E8D] text-[15px] py-2 hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600"
              >
                Product List
              </Link>
              <div className="flex text-xl gap-3 items-center pt-4">
                <IoSearch />
                <MdOutlineShoppingCart />
                <CgProfile />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Header (Product Categories) */}
        <div className="flex w-[80%] md:w-[75%] lg:w-[65%] justify-between items-center h-1/2 text-[#726E8D] text-[8px] md:text-[15px]">
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            All Products
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Plant Pots
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Ceramics
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1 hidden sm:block"
          >
            Tables
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1 hidden sm:block"
          >
            Chairs
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1 hidden sm:block"
          >
            Crockery
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1 hidden sm:block"
          >
            Tableware
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1 hidden sm:block"
          >
            Cutlery
          </Link>
        </div>
      </nav>
    </header>
  );
}

