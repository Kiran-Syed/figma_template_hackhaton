import Image from "next/image";

export default function Hero() {
  return (
    <main>
      {/* ============== Left side ============== */}
      <div className="flex justify-center md:justify-between items-center w-[85%] mt-10 m-auto bg-[#2A224C]">
        <div className="w-[80%] md:w-[45%] h-max py-10 md:py-3.5 md:ml-8 lg:ml-12 text-white flex flex-col gap-8 sm:gap-20 md:gap-36">
          <div className="flex flex-col gap-4 w-[80%]">
            <h1 className="text-xl sm:text-2xl">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="hidden sm:block bg-[#3A345B] py-[12px] w-[50%] md:w-[30%] h-9 my-1.5 text-xs text-white mt-4 hover:bg-white hover:text-black ">
              View collection
            </button>
          </div>
          <div className="text-xs">
            <p>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <button className="block sm:hidden bg-[#3A345B] py-[10px] w-[100%] h-9 my-1.5 text-xs text-white mt-6 hover:bg-white hover:text-black ">
              View collection
            </button>
          </div>
        </div>

        {/* =========== Right Side =========  */}
        <div>
          <Image
            src="/images/rightimage.png"
            alt="cover"
            width={100}
            height={100}
            className="sm:w-[80%] sm:h-[200px] md:w-[100%] md:h-[430px] hidden md:block"
          />
        </div>
      </div>
    </main>
  );
}
