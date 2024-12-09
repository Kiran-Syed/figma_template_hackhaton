import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header>
      <nav className="max-w-[1440px] h-[132px] flex flex-col items-center FFFFFF px-10 lg:w-full mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
         <div className="flex items-center"> <IoSearch className="text-xl" /><MdMenu className="sm:hidden text-xl ml-2"/></div>

          <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

          <div className="sm:flex text-xl gap-3 hidden">
            <MdOutlineShoppingCart />
            <CgProfile />
          </div>
        </div>

        <nav className="sm:flex w-[80%] md:w-[65%] justify-between items-center h-1/2 text-[#726E8D] hidden text-[8px] md:text-[15px]">
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
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Tables
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Chairs
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Crockery
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Tableware
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-red-600 pb-1"
          >
            Cutlery
          </Link>
        </nav>
      </nav>
    </header>
  );
}
