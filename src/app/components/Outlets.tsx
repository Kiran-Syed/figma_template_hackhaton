import Image from "next/image";

export default function Outlets() {
  return (
    <main>
      <div className="w-full flex flex-col sm:flex-row">

        <div className="flex flex-col gap-4 md:gap-8 p-2 md:p-10 w-[90%] sm:w-[50%] mx-auto">

            <div>
                <h1 className="text-xl sm:text-2xl w-[85%]">
                   From a studio in London to a global brand with over 400 outlets
               </h1>
            </div>

          <div className="text-xs w-[85%]">

               <h3 className="mb-6">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
              </h3>
              <p className="mb-6">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
               </p>

          </div>

          <button className="bg-gray-200 py-[10px] w-[120px] h-9 my-1.5 text-xs lg:mt-16 hover:bg-black hover:text-white">
             Get in touch
          </button>

        </div>

        <div className="w-80% sm:w-[50%] mx-auto">
          <Image
            src="/images/Image.png"
            alt="Sofa Side Decore"
            width={100}
            height={100}
            className="w-full h-[300px] sm:h-[460px]"
          ></Image>
        </div>
      </div>
    </main>
  );
}
