import React from "react";
import Image from "next/image";
import Play from "@/components/Play";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center relative overflow-auto">
        <div className="z-10 w-full h-full flex flex-col justify-center items-star gap-8  md:gap-16 px-4 md:px-8 py-10">
          <div className="text-white overflow-hidden flex flex-col lg:flex-row justify-between items-center w-full gap-8  md:gap-12 ">
            <div className="lg:w-6/12 flex flex-col justify-center items-end px-0 lg:px-2 xl:mt-28">
              <div className=" flex flex-col justify-center items-start gap-8 md:gap-16 ">
                <Image
                  src="/The_only_wallot_youll_need.png"
                  alt="bg-image"
                  width={550}
                  height={550}
                  className="object-contain"
                />
                <p className="w-full text-sm sm:text-lg  flex flex-col gap-3 tracking-tight md:tracking-wider ">
                  <span>
                    Sign&nbsp;up&nbsp;now&nbsp;to&nbsp;reaserve&nbsp;your&nbsp;spot&nbsp;for&nbsp;early&nbsp;access.
                  </span>
                  <span className="flex">
                    <span className="flex flex-col w-fit">
                      Refer&nbsp;friends
                      <span className="w-full h-[2px] bg-gradient-to-r from-[#37679b] via-[#74e36a] to-[#a16787]"></span>
                    </span>
                    &nbsp;to&nbsp;accelerate&nbsp;your&nbsp;spot&nbsp;in&nbsp;the&nbsp;queue
                  </span>
                </p>
                <div className="w-full md:w-11/12 relative px-0 hidden lg:flex">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="w-full bg-[#16181d] p-3 ps-4 pr-40  xl:ps-12 lg:pe-20 rounded-full border-t-2 border-l-2 border-b-2 border-r-0 border-gray-700 outline-none ring-0 focus:outline-none focus:ring-0"
                  />
                  <button className="absolute right-0 top-0 bottom-0 bg-gradient-to-b from-[#498fdd] to-[#66dce7] text-black py-3 px-3 rounded-full text-sm md:text-base font-bold">
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex justify-center items-center mb-0 lg:mb-20">
              <div className="w-full md:w-8/12 lg:w-full xl:w-9/12 aspect-video bg-black rounded-[35px] flex justify-center items-center">
                <Play />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:ps-12 flex lg:hidden justify-center ">
            <div className="w-full  md:w-9/12  relative px-0 xl:ps-20">
              <input
                type="text"
                placeholder="Enter email address"
                className="w-full bg-[#16181d] p-3 ps-4 pr-40 lg:ps-12 lg:pe-20 rounded-full border-t-2 border-l-2 border-b-2 border-r-0 border-gray-700 outline-none ring-0 focus:outline-none focus:ring-0"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-gradient-to-b from-[#498fdd] to-[#66dce7] text-black py-3 px-3 rounded-full text-sm md:text-base font-bold">
                Get Early Access
              </button>
            </div>
          </div>
        </div>

        <Image
          src="/BG_Combined.jpg"
          alt="bg-image"
          fill
          className="aspect-square object-cover hidden lg:block"
        />

        <Image
          src="/BG01.jpg"
          alt="bg-image"
          fill
          className="object-fill block lg:hidden"
        />
      </div>
    </>
  );
}
