import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header>

      <nav className="max-w-[1440px] h-[132px] flex flex-col items-center FFFFFF px-10 lg:w-full mx-auto">

        {/* =========== TOP HEADER =========== */}

        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">

          <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

          <div className="flex text-xl gap-3 items-center">
            <Link
              href="/about"
              className="text-[#726E8D] text-[8px] md:text-[15px] hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
            >
              
              About Us
            </Link>
            <Link
              href="/"
              className="text-[#726E8D] text-[8px] md:text-[15px] hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
            >
              
              Contact
            </Link>
            <Link
              href="/product"
              className="text-[#726E8D] text-[8px] md:text-[15px] hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
            >
              
              ProductList
            </Link>
            <IoSearch className="text-xl hidden sm:block" />
            <MdOutlineShoppingCart className="hidden sm:block"/>
            <CgProfile  className="hidden sm:block"/>
          </div>
        </div>

            {/*============= BOTTOM HEADER ================ */}

        <nav className="flex w-[80%] md:w-[75%] lg:w[65%] justify-between items-center h-1/2 text-[#726E8D] text-[8px] md:text-[15px]">
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
            Plant pots
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
        </nav>
      </nav>
    </header>
  );
}
