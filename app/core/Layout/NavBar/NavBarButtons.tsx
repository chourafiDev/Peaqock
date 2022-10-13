import { BiUserCircle } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const NavBarButtons = () => {
  return (
    <div className="flex items-center">
      <button className="flex items-center gap-2 text-white bg-yellow-gradient px-3 h-16 w-30">
        <AiOutlineMessage />
        <span>Let&apos;s talk</span>
      </button>
      <button className="flex items-center gap-1 text-white bg-yellow-gradient px-3 h-16 w-30">
        <BiUserCircle />
        <BsChevronDown />
      </button>
    </div>
  );
};

export default NavBarButtons;
