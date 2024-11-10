import logo from "../assets/logo.svg";
import github from "../assets/github_logo.svg";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const showMobile = () => {
    setMobileActive(true);
  };

  useEffect(() => {
    // console.log(mobileActive)
  }, [mobileActive]);
  return (
    <div className="min-h-content flex md:flew-row items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} className="h-5 md:h-12" alt="" />
        <h2 className="text-4xl">Resize </h2>
      </div>

      {/* Middle Section */}
      <div className="hidden md:flex items-center gap-5 text-sm md:text-lg ">
        <h3 className="hover:text-gray-500 underline underline-offset-2">
          Home
        </h3>
        <h3 className="hover:text-gray-500 ">About Us</h3>
        <h3 className="hover:text-gray-500 ">Our Collection</h3>
        <h3 className="hover:text-gray-500 ">Contact Us</h3>
      </div>

      {/* Side Section */}
      <div className="flex gap-2">
        <a href="https://github.com/indiedev2003" target="blank">
          <img src={github} className="h-10 sm:h-12" alt="" />
        </a>
        <img
          src={menu}
          onClick={showMobile}
          className="h-10 sm:h-12 sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileActive ? "top-0 right-0" : "hidden -right-[100%]"
        } sm:hidden z-20 absolute w-full h-full bg-white transition-all duration-1000 `}
      >
        <img
          src={cross}
          className="mb-2 h-10 rotate-45 "
          alt=""
          onClick={() => setMobileActive(false)}
        />
        <h2 className="py-2 text-lg w-ful pl-10 bg-gray-500">Home</h2>
        <h2 className="py-2 text-lg w-ful pl-10">About Us</h2>
        <h2 className="py-2 text-lg w-ful pl-10">Contact Us</h2>
        <h2 className="py-2 text-lg w-ful pl-10">Our Project</h2>
        <h2 className="py-2 text-lg w-ful pl-10">Collection</h2>
      </div>
    </div>
  );
};

export default Navbar;
