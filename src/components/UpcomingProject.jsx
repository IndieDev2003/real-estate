import React from "react";

const UpcomingProject = () => {
  return (
    <div className="h-full w-full">
      {/* UpComing Project */}
      <div className="h-full w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl sm:text-5xl mt-3">
            Upcoming Projects by Resize
          </h2>
          <p className="w-[80%] text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            aut!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo, molestias?
          </p>
        </div>
        <div className="flex flex-row  w-full gap-2 overflow-x-scroll mt-3">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl sm:text-5xl mt-3">
          Upcoming Projects by Resize
        </h2>
        <p className="w-[80%] text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          aut!lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quo, molestias?
        </p>
      </div>
      <div className="flex flex-row  w-full gap-2 overflow-x-scroll mt-3">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default UpcomingProject;
