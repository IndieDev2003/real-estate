import React from "react";

const Search = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center my-4">
        <div className="w-full sm:w-[70%] border-2 px-2 rounded-lg">
          {/* title */}
          <h2 className="text-center my-2 text-2xl sm:text-3xl mb-4">
            Search Best Property for You
          </h2>

          {/* Search Options */}
          <div>
            <div className="w-full flex justify-between gap-1  ">
              <select className="flex-1 bg-gray-300 rounded-lg px-1 py-2" name="location" id="">
                <option value="">New York</option>
                <option value="">Mexico</option>
                <option value="">Berlin</option>
                <option value="">Paris</option>
              </select>

              <select className="flex-1 bg-gray-300 rounded-lg px-1 py-2" name="" id="">
                <option value="">100K+</option>
                <option value="">200K+</option>
                <option value="">300k+</option>
                <option value="">400K+</option>
              </select>
              <select className="flex-1 bg-gray-300 rounded-lg px-1 py-2" name="" id="">
                <option value="">New</option>
                <option value="">Refurbished</option>
                <option value="">Rented</option>
                <option value="">Renovating</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex w-full items-center justify-center my-3">
            <button className=" w-full bg-blue-500 py-2 text-white font-semibold rounded-md outline-none border-none ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
