import Image from "next/image";

export default function Cards() {
  return (
    <>
      <section>
        <h1 className="text-[#3A345B] text-2xl mt-[70px] ml-[7.5%] ">
          Our popular products
        </h1>

        <div className="w-[90%] sm:w-[85%] h-max flex gap-4 sm:gap-4 flex-wrap m-auto mt-[22px] justify-center">
          
          {/* ============ CARD 1 =========== */}

          <div className="w-[260px] sm:w-[50%] h-max font-sans">
            <Image
              src="/images/sofa.jpg"
              alt="Bulb"
              width={100}
              height={100}
              className="w-full h-[220px] sm:h-[290px]"
            />

            <div className="mt-4 text-[#3A345B]">
              <p>The Poplar suede sofa</p>
              <p className="text-sm p-1">£980</p>
            </div>
          </div>

          {/* ========= CARD 2 ========= */}

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
              <p className="text-sm p-1">£125</p>
            </div>
          </div>

          {/* ============= CARD 3 ============ */}

          <div className="w-[126px] sm:w-[23%] h-max font-sans mt-30px sm:mt-0">
            <Image
              src="/images/Parent.png"
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

        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 py-[12px] w-[120px] h-9 my-1.5 text-xs text-black mt-4 hover:bg-black hover:text-white ">
            View collection
          </button>
        </div>
      </section>
    </>
  );
}
