import Image from "next/image";
import { about } from "../../assets";
import Button from "./Utils/Button";

const About = () => {
  return (
    <div className="bg-light-gray">
      <div className="px-28 py-16">
        <div className="w-full grid grid-cols-2 gap-32 items-center justify-between">
          <div>
            <p className="uppercase text-second-gray mb-3">About Us</p>
            <h2 className="text-base-gray font-bold text-3xl mb-6 leading-relaxed">
              PEAQOCK is a member <br /> driven network
            </h2>
            <p className="text-base-gray text-sm pb-14">
              The purpose of TRADAR Club is to be a network of international
              businesses and executives dedicated to transforming Africa through
              the vehicles of trade and investment. TRADAR Club Members are
              global industry leaders, African corporates, intergovernmental
              organisations, policy makers and other influential stakeholders
              committed to the shared objective of unlocking growth and
              development for the African continent
            </p>
            <Button cssClasses="btn btn-green">
              <span className="uppercase font-semibold">Learn More</span>
            </Button>
          </div>
          <div className="ml-auto">
            <Image src={about} alt="about" width={900} height={550} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
