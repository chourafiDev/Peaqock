import Button from "./Utils/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Icon1, Icon2, Icon3, Icon4 } from "../../assets/images";
import Image from "next/image";

const Membership = () => {
  return (
    <div className="bg-light-gray lg:px-28 md:px-16 px-6 pt-10 pb-40">
      <div className="mb-10 text-center">
        <p className="text-second-gray mb-3 uppercase">membership</p>
        <h1 className="text-base-gray font-bold md:text-2xl text-xl mb-6">
          PEAQOCK Membership Packages
        </h1>

        <p className="lg:px-60 md:px-20 px-6 text-base-gray text-sm">
          This page will highlight the different membership packages and the
          benefits and costs of each package. The initial plans to be configured
          are as presented below. The table should be configurable to update the
          sections with different feature, benefits and costs from time to time.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Button cssClasses="flex items-center gap-2 btn bg-primary/10">
          <span className="uppercase text-primary font-semibold">
            Package details
          </span>
          <AiOutlineArrowRight size={12} className="text-primary" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-28 gap-20">
        <div className="space-y-12">
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-0">
            <div className="flex items-center gap-4 md:mb-0 mb-4">
              <div className="inline-block bg-third-gray/10 p-4 rounded-lg">
                <div className="flex">
                  <Image src={Icon1} alt="icon-1" width={55} height={55} />
                </div>
              </div>
              <div>
                <h2 className="text-primary text-xl font-bold pb-2">Basic</h2>
                <p className="text-base-gray text-sm pr-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt molestias quibusdam nemo. Alias, perferendis.
                </p>
              </div>
            </div>
            <Button cssClasses="btn btn-green w-[14rem] flex justify-between items-center font-normal text-[10px] px-3 py-3 rounded-lg bg-green-gradient-2">
              <span>View Details</span>
              <span className="uppercase">Free</span>
            </Button>
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-0">
            <div className="flex items-center gap-4 md:mb-0 mb-4">
              <div className="inline-block bg-third-gray/10 p-4 rounded-lg">
                <div className="flex">
                  <Image src={Icon2} alt="icon-1" width={55} height={55} />
                </div>
              </div>
              <div>
                <h2 className="text-blue text-xl font-bold pb-2">Standard</h2>
                <p className="text-base-gray text-sm pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt molestias quibusdam nemo. Alias, perferendis.
                </p>
              </div>
            </div>
            <Button cssClasses="btn btn-blue w-[14rem] flex justify-between items-center font-normal text-[10px] px-4 py-3 rounded-lg">
              <span>View Details</span>
              <span>$1.500</span>
            </Button>
          </div>
        </div>
        <div className="space-y-12">
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-0">
            <div className="flex items-center gap-4 md:mb-0 mb-4">
              <div className="inline-block bg-third-gray/10 p-4 rounded-lg">
                <div className="flex">
                  <Image src={Icon3} alt="icon-1" width={55} height={55} />
                </div>
              </div>
              <div>
                <h2 className="text-gold text-xl font-bold pb-2">Gold</h2>
                <p className="text-base-gray text-sm pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt molestias quibusdam nemo. Alias, perferendis.
                </p>
              </div>
            </div>
            <Button cssClasses="btn btn-yellow w-[14rem] flex justify-between items-center font-normal text-[10px] px-3 py-3 rounded-lg">
              <span>View Details</span>
              <span>$2.500</span>
            </Button>
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-0">
            <div className="flex items-center gap-4 md:mb-0 mb-4">
              <div className="inline-block bg-third-gray/10 p-4 rounded-lg">
                <div className="flex">
                  <Image src={Icon4} alt="icon-1" width={55} height={55} />
                </div>
              </div>
              <div>
                <h2 className="text-purple text-xl font-bold pb-2">Platinum</h2>
                <p className="text-base-gray text-sm pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt molestias quibusdam nemo. Alias, perferendis.
                </p>
              </div>
            </div>
            <Button cssClasses="btn btn-purple w-[14rem] flex justify-between items-center font-normal text-[10px] px-3 py-3 rounded-lg">
              <span>View Details</span>
              <span>$5.000</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
