import { BiUserCircle } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import Button from "../../../../components/Utils/Button";

const NavBarButtons = () => {
  return (
    <div className="flex items-center h-16">
      <Button cssClasses="bg-yellow-gradient flex items-center justify-center gap-2 text-white h-full w-full">
        <AiOutlineMessage size={25} />
        <span>Let&apos;s talk</span>
      </Button>
      <Button cssClasses="bg-yellow-gradient flex items-center justify-center gap-2 text-white h-full w-full border-l border-white">
        <BiUserCircle size={25} />
        <BsChevronDown size={20} />
      </Button>
    </div>
  );
};

export default NavBarButtons;
