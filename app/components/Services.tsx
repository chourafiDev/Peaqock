import Image from "next/image";
import React from "react";
import { chart } from "../../assets";
import Button from "./Utils/Button";

const Services = () => {
  return (
    <div className="bg-light-gray relative bg-services bg-no-repeat bg-cover bg-center">
      <div className="px-28 pb-32 pt-20">
        <div className="w-full grid grid-cols-2 items-center justify-between gap-40">
          <div>
            <p className="uppercase text-second-gray mb-3">Our Services</p>
            <h2 className="text-base-gray font-bold text-5xl mb-8">
              <span className="text-gold">Trade</span> Simple,
            </h2>
            <p className="text-base-gray text-sm pb-14 leading-loose">
              Discover a world of trade opportunities in one place with detailed
              information about imports, market dynamics, tariffs, regulatory
              requirements, potential buyers and more.
            </p>
            <Button cssClasses="btn btn-green">
              <span className="uppercase font-semibold">Learn More</span>
            </Button>
          </div>
          <div className="ml-auto">
            <Image src={chart} alt={chart} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
