import React from "react";

import house from "../../assets/house-img.jpg";

const ProjectItem = () => {
  return (
    <div className="py-5">
      <div className="h-[350px] w-[250px] bg-red-200 px-2 py-2 rounded-xl flex-shrink-0 relative ">
        <div className="absolute -right-1 -top-3 z-10 bg-blue-400 px-4 py-2 rounded-xl">
          <h3>Hello World</h3>
        </div>
        <div className="h-full overflow-hidden">
          <img src={house} alt="" className="object-cover rounded-lg" />
          <p className="text-lg">City : Mesa Verde</p>
          <p className="mt-1 leading-5 px-1 py-1 bg-white rounded-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
            laudantium. Lorem ipsum dolor
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
