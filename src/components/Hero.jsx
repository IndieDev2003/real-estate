import React from "react";

import hero_img from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[80vh] mt-6 ">
      <div className="h-full w-full  rounded-xl relative overflow-hidden">
        <div className="bg-amber-400 h-[150%] w-[200%] absolute -z-20 animate-pulse trasnsition-all duration-200"></div>
        <img
          src={hero_img}
          alt="hero image"
          className="object-cover rounded-xl p-1 w-full h-full object-center overflow-hidden absolute -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h2 className="px-4 py-1 bg-white text-3xl text-black rounded-lg">
            Hello World
          </h2>
          <p className="min-w-80 max-w-[70%] text-center text-lg sm:text-xl text-amber-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptas vel neque id explicabo facere inventore architecto placeat
            eos mollitia.
          </p>
          <div className="flex gap-2 ">
            <button className=" bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700 font-semibold transition-all duration-500 text-white px-4 py-2">
              Hire Us
            </button>
            <button className=" bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700 font-semibold transition-all duration-500 text-white px-4 py-2">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
