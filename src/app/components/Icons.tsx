import { CiCircleCheck } from "react-icons/ci";
import { IoFolderOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

export default function Icons() {
  return (
    <section>
       
       {/*  ============== DIFFERENT BRAND =========== */}
      <div className="w-[90%] md:w-[85%] mx-auto mt-24 text-[#3A345B]">

        <h1 className="text-xl text-center ">What makes our brand different</h1>

        <div className="flex gap-8 mt-12 flex-wrap sm:flex-nowrap justify-center">

          <div className="w-[90%] sm:w-[50%] md:w-[30%] font-sans">
            <TbTruckDelivery className="text-2xl"/>
            <h3 className="mt-2 text-[17px]">Next day as standard</h3>
            <p className="mt-2 text-[14px] text-">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="w-[90%] sm:w-[50%] md:w-[30%] font-sans">
          <CiCircleCheck className="text-2xl"/>
            <h3 className="mt-2 text-[17px]">Made by true artisans</h3>
            <p className="mt-2 text-[14px] text-">
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className="w-[90%] sm:w-[50%] md:w-[30%] font-sans">
            <IoFolderOutline className="text-2xl"/>
            <h3 className="mt-2 text-[17px]">Unbeatable prices</h3>
            <p className="mt-2 text-[14px] text-">
            For our materials and quality you wont find better prices anywhere
            </p>
          </div>

          <div className="w-[90%] sm:w-[50%] md:w-[30%] font-sans">
           <PiPlant className="text-2xl"/>
            <h3 className="mt-2 text-[17px]">Recycled packaging</h3>
            <p className="mt-2 text-[14px] text-">
            We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
