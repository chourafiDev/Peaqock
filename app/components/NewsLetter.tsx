import { HiOutlineArrowSmRight } from "react-icons/hi";
import Button from "./Utils/Button";

const NewsLetter = () => {
  return (
    <div className="bg-light-gray flex lg:flex-row flex-col justify-between items-center gap-10 md:px-20  py-16">
      <div>
        <h2 className="relative uppercase text-3xl font-bold text-base-gray before:absolute before:-bottom-3 before:left-0 before:bg-primary before:h-1 before:w-20 before:rounded-full">
          NewsLetter
        </h2>
      </div>
      <div>
        <div className="flex md:flex-row flex-col items-center md:bg-forth-gray rounded-full mx-8">
          <input
            type="text"
            placeholder="Your email adress"
            className="bg-transparent outline-none px-6 md:w-[28rem] text-md text-second-gray md:border-none border border-second-gray md:py-0 py-2 rounded-full md:mb-0 mb-3"
          />
          <Button cssClasses="flex items-center gap-2 btn btn-green font-normal">
            <span>Subscribe</span>
            <HiOutlineArrowSmRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
