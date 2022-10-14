import React from "react";

const Statistics = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-6 lg:px-28 px-10 py-8 bg-forth-gray">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-primary font-bold md:text-4xl text-3xl">+800</h2>
        <p className="text-second-gray text-sm">Partners</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-primary font-bold md:text-4xl text-3xl">+55</h2>
        <p className="text-second-gray text-sm">Countries</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-primary font-bold md:text-4xl text-3xl">+4 500</h2>
        <p className="text-second-gray text-sm">Opportunities</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="text-primary font-bold md:text-4xl text-3xl">+1 529</h2>
        <p className="text-second-gray text-sm">Companies</p>
      </div>
    </div>
  );
};

export default Statistics;
