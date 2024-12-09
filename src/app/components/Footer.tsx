import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaSkype } from "react-icons/fa";
import { MdOutlinePinInvoke } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#2A224C] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Menu Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          {/*Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our company</h4>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* input field */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Join our mailing list
            </h4>
            <form className="flex mt-6">

              <input
                type="text"
                name="Email"
                placeholder="Add your email here"
                className="bg-[#3A345B] w-[350%] md:w-[300px] h-10 px-6 rounded relative top-0 right-0 shadow-lg"
              />

              <button className="border w-[90%] bg-white text-black text-[10px] sm:text-sm relative top-0 right-[43px] sm:right-[70px] px-4 hover:bg-black hover:text-white ">
                SEND
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-500" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>Copyright 2022 Avion LTD</p>

          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Linkedin />
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <Facebook />
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <Instagram />
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <FaSkype size={24} />
            </Link>

            <Link href="#" className="hover:text-gray-300">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <MdOutlinePinInvoke size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
