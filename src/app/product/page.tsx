
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";

export default function Productlist() {
  return (
    <>
      <section>

        <div>
        <Image
              src="/images/frame2.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[120px]"
            />
        </div>

        <div className="flex justify-between items-center text-[#726E8D] text-[8px] md:text-[15px] p-6">
          <ul className="sm:flex gap-8 hidden sm:block">
            <li className="flex items-center ">Category <GoTriangleDown /></li>
            <li className="flex items-center">Product type <GoTriangleDown /></li>
            <li className="flex items-center">Price <GoTriangleDown /></li>
            <li className="flex items-center">Brand <GoTriangleDown /></li>
          </ul>
          <ul className="flex gap-8">
            <li>Sorting by</li>
            <li className="flex items-center">Date added <GoTriangleDown /></li>
          </ul>
        </div>

       {/* =============== 1st card set ============== */}

        <div className="w-[90%] sm:w-[85%] h-max flex gap-4 sm:gap-4 flex-wrap m-auto mt-[35px] justify-around">

          {/* ============ CARD 1 =========== */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/rightimage.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£250</p>
            </div>
          </div>

          {/* ========= CARD 2 ========= */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/Photo.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£255</p>
            </div>
          </div>

          {/* ============= CARD 3 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans mt-30px sm:mt-0">
            <Image
              src="/images/Photo2.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£399</p>
            </div>
          </div>

          {/* ============= CARD 4 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/Photo3.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£125</p>
            </div>
          </div>
        </div>

        {/* =============== 2nd card set ============== */}

        <div className="w-[90%] sm:w-[85%] h-max flex gap-4 sm:gap-4 flex-wrap m-auto mt-[35px] justify-around">
          
          {/* ============ CARD 1 =========== */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/set1.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£250</p>
            </div>
          </div>

          {/* ========= CARD 2 ========= */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/set2.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£125</p>
            </div>
          </div>

          {/* ============= CARD 3 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans mt-30px sm:mt-0">
            <Image
              src="/images/set3.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£155</p>
            </div>
          </div>

          {/* ============= CARD 4 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/set4.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£135</p>
            </div>
          </div>
        </div>

        {/* ==============  3nd card set ============ */}

        <div className="w-[90%] sm:w-[85%] h-max flex gap-4 sm:gap-4 flex-wrap m-auto mt-[35px] justify-around">
          
          {/* ============ CARD 1 =========== */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/rightimage.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£250</p>
            </div>
          </div>

          {/* ========= CARD 2 ========= */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/Photo.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£255</p>
            </div>
          </div>

          {/* ============= CARD 3 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans mt-30px sm:mt-0">
            <Image
              src="/images/Photo2.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£125</p>
            </div>
          </div>

          {/* ============= CARD 4 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans">
            <Image
              src="/images/Photo3.png"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Silky Vase</p>
              <p className="text-sm p-1">£399</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 py-[12px] w-[120px] h-9 my-1.5 text-xs text-black mt-4 mb-10 hover:bg-black hover:text-white ">
            View collection
          </button>
        </div>
      </section>
    </>
  );
}
