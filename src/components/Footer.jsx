import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="h-[50vh] w-full bg-gray-900  text-white text-center sm:text-start">
        <div className="flex flex-col gap-10 sm:gap-5 sm:flex-row justify-evenly sm:px-10 py-10 sm:py-10">
          {/* intro */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-2xl">Resize by Gagan Suman</h2>
            <p className="max-w-[80%] sm:max-w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              numquam accusamus molestias necessitatibus atque blanditiis
              adipisci est excepturi odit enim?
            </p>
          </div>
          {/* links */}
          <div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Carrers</li>
            </ul>
          </div>
          {/* Email */}
          <div>
            <ol>
              <li>Email : fbdgagansuman@gmail.com</li>
              <li>Email : github.com/indiedev2003</li>
            </ol>
          </div>
        </div>
        <div className="h-10 sm:min-h-20 w-full bg-white flex flex-col items-center justify-center">
          <hr />
          <h2 className="text-black text-center">
            Copyright by Gagan Suman @2024
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
