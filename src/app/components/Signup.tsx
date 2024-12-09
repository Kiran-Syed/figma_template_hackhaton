export default function Signup() {
  return (
    <section>
      <div className="w-full sm:bg-gray-200 mt-10 h-max flex flex-col justify-center items-center md:p-10">

        <div className="w-[95%] md:w-[85%] mx-auto bg-white p-8">

          <div className="w-full md:w-[55%] m-auto text-center font-sans">
            <h1 className="text-xl sm:text-2xl md:text-4xl leading-[25px] md:leading-[40px]">
              Join the club and get the benefits
            </h1>

            <p className="w-full md:w-[80%] text-[10px] md:text-[16px] mt-5 mx-auto">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>

          <div className="flex justify-center mt-10">
             <input
              type="text"
              name="Email"
              placeholder="your@email.com"
              className="w-full md:w-[45%] h-12 px-4 md:p-6 relative top-0 right-0 bg-gray-200 text-[10px] md:text-[15px]"
             />

              <button className="px-[15px] sm:px-[21px] bg-[#2A224C] text-white text-[10px] sm:text-sm relative top-0 sm:right-[80px] hover:bg-black  hover:text-white ">
                 SEND
              </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
