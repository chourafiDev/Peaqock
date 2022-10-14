import Image from "next/image";
import React from "react";
import { chart } from "../../assets";
import Button from "./Utils/Button";

const Services = () => {
  return (
    <div className="bg-light-gray relative bg-services bg-no-repeat bg-cover bg-center">
      <div className="lg:px-28 md:px-16 px-6 pb-32 pt-20">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-between lg:gap-40 md:gap-20 gap-6">
          <div>
            <p className="uppercase text-second-gray mb-3">Our Services</p>
            <h2 className="text-base-gray font-bold lg:text-5xl text-4xl mb-8">
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
