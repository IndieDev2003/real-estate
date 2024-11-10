import React from "react";

const Glimpse = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[50vh] mt-10 sm:mt-40 mb-4">
      {/* Left Side */}
      <div className="w-full sm:max-w-[50%] flex flex-col items-start justify-center sm:px-10 text-center sm:text-start">
        <h2 className="text-xl md:text-3xl lg:text-5xl mb-2 w-full md:animate-bounce">Our Short Story</h2>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg  w-full px-3 sm:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur
          iure doloremque vero iusto illum ratione inventore possimus quisquam
          dolor aliquam, officia ex, cumque, atque architecto similique
          corporis. Quo, harum.
        </p>
      </div>
      {/* Right Side */}
      <div className=" flex items-center justify-center hover:rotate-2 transition-all duration-500">
        <img
          src="https://i.pinimg.com/564x/0f/fb/b8/0ffbb8d668ec0fc16fd1feca30f62a13.jpg"
          alt=""
          className="rounded-xl mt-3 sm:mt-0 object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Glimpse;
