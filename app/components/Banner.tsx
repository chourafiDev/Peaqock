import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Utils/Button";

const Banner = () => {
  return (
    <div className="relative bg-banner bg-no-repeat bg-cover bg-center h-screen">
      <div className="absolute top-0 left-0 h-full w-full bg-primary/70"></div>

      <div className="absolute flex bottom-0 left-0 w-full bg-gray-opacity backdrop-blur-[5px] px-20 py-8">
        <div className="flex-2 w-[60%] space-y-8">
          <h2 className="text-white font-bold text-[50px] leading-snug uppercase">
            Manage <br /> Operations
          </h2>
          <div>
            <Button cssClasses="btn btn-white">Learn More</Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between pb-3">
            <p className="text-white text-lg">01.</p>
            <div className="flex items-center gap-2">
              <div className="p-2 border border-white rounded-md">
                <AiOutlineArrowLeft size={12} className="text-white" />
              </div>
              <div className="p-2 border border-white rounded-md">
                <AiOutlineArrowRight size={12} className="text-white" />
              </div>
            </div>
          </div>
          <hr className="border-t-[3px] border-white/20" />
          <p className="text-white text-[16px] font-light mt-5">
            Discover market access rules, check regulatory compliance, latest
            customs duties, shipping requirements and other documentation.
            Africa-wide, harmonized, and aggregated trade and investment
            regulatory information i.e., Foreign Trade Regulations (e.g.,
            Customs procedures, certification, licensing, etc.) and Market
            Access (trade agreements, tariffs, and non-tariff measures etc.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
