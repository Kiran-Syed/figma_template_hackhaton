import Image from "next/image";
import Icons from "../components/Icons";
import Signup from "../components/Signup";

export default function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full sm:w-[85%] mx-auto items-center justify-between py-16 px-4 font-sans">
        <h1 className="w-[70%] md:w-[50%] text-xl md:text-2xl">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
        <button className="bg-gray-200 py-[10px] w-[120px] h-9 text-xs mt-6 sm:mt-0 hover:bg-black hover:text-white">
          View our products
        </button>
      </div>

      {/* ============= decore ideas ============ */}

      <div className="flex flex-col sm:flex-row gap-4 w-[90%] mx-auto font-san">
        <div className="w-[85%] md:w-[50%] bg-[#2A224C] text-white p-6 sm:p-12 mx-auto">
          <h2 className="text-xl sm:text-2xl ">It started with a small idea</h2>

          <div className="text-[13px] w-[85%] my-4 text-gray-200">
            <p>
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>

          <button className="bg-[#3A345B] py-[10px] w-[100px] h-9 text-xs text-white md:mt-10 lg:mt-36 hover:bg-white hover:text-black ">
            View collection
          </button>
        </div>
        <div className="w-[85%] md:w-[50%] mx-auto">
          <Image
            src="/images/yellowsofa.png"
            alt="cover"
            width={100}
            height={100}
            className="w-full h-[230px] sm:h-[380px]"
          />
        </div>
      </div>

      {/* ============================= */}

      <div className="w-full flex flex-col sm:flex-row mt-14">
        <div className="w-80% sm:w-[50%] mx-auto">
          <Image
            src="/images/piano.png"
            alt="Sofa Side Decore"
            width={100}
            height={100}
            className="w-full h-[300px] sm:h-[460px]"
          ></Image>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-10 w-[95%] sm:w-[50%] mx-auto bg-gray-100">
          <div>
            <h4 className="text-xl sm:text-2xl w-[85%]">
              Our service isnt just personal, its actually hyper personally
              exquisite
            </h4>
          </div>

          <div className="text-xs w-[85%]">
            <h3 className="mb-6">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </h3>
            <p className="mb-6">
              When Handmade, and lovingly crafted furniture and homeware is what we live, breathe
              and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>

          <button className="bg-white py-[10px] w-[120px] h-9 my-1.5 text-xs lg:mt-16 hover:bg-gray-500 hover:text-white">
            Get in touch
          </button>
        </div>
      </div>
      <Icons />
      <Signup />
    </>
  );
}
