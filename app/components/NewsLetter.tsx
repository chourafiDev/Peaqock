import { HiOutlineArrowSmRight } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <div className="bg-light-gray px-20 py-16 flex justify-between items-center">
      <div>
        <h2 className="relative uppercase text-3xl font-bold text-base-gray before:absolute before:-bottom-3 before:left-0 before:bg-primary before:h-1 before:w-20 before:rounded-full">
          NewsLetter
        </h2>
      </div>
      <div>
        <div className="flex items-center bg-forth-gray rounded-full">
          <input
            type="text"
            placeholder="Your email adress"
            className="bg-transparent outline-none px-6 w-[28rem] text-md text-second-gray"
          />
          <button className="flex items-center gap-2 btn btn-primary">
            <span>Subscribe</span>
            <HiOutlineArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
