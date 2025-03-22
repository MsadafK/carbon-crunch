import React from "react";
import EarthImage from "../assets/EarthImage.png";
import Stats from "./Stats";
// import ParallaxSlider from "./ParallaxSlider";

const Hero = () => {
  return (
    <section className="p-4 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-y-12 xl:p-0 xl:gap-y-40">
      {/* img container */}
      <div className="md:self-center">
        <img src={EarthImage} alt="" />
        {/*<ParallaxSlider /> */}
      </div>
      {/* title and text container */}
      <div className="flex flex-col gap-6 items-start md:order-first xl:justify-between">
        <button className="text-xs bg-black text-gray-300 px-3 py-2 rounded-full">
          👋 Let's Save our Environment
        </button>

        <h1 className="text-xl text-[#2D2D2D] font-bold leading-10 lg:text-[2.5rem] xl:text-[54px] xl:leading-[1]">
          Optimizing your eco reporting with{" "}
          <span className="lg:leading-[2.25] bg-[#FEAB4F] px-4 py-2 rounded-full text-white xl:inline-block xl:px-12 xl:py-0 xl:leading-[1.5] xl:my-4">
            CARBON CRUNCH
          </span>
        </h1>
        <p className="text-[#2D2D2D] text-sm xl:text-[24px]">
          <span className="text-[#28B30E] font-bold">95% </span>Accurate Carbon
          Calculations Trusted by Industry Leaders
        </p>
        {/* CTA Buttons container */}
        <div className="flex items-center gap-4 text-sm font-semibold ">
          <a href="#" className="text-[#28B30E] xl:px-8 xl:py-2 xl:text-lg transition delay-150 duration-300 ease-in-out hover:translate-y-1 rounded-md hover:bg-indigo-500 hover:text-white cursor-pointer">
            Free Calculator
          </a>
          <a
            href="#"
            className="bg-[#28B30E] text-[#222222] px-8 py-2 rounded-md xl:text-lg transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-red-200 cursor-pointer"
          >
            Book Demo
          </a>
        </div>
      </div>
      {/* statistics */}
      <Stats className="col-span-2" />
    </section>
  );
};

export default Hero;
