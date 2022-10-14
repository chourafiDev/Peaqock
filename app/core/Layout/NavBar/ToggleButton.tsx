import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../../components/Utils/Button";

interface IProps {
  handelNav: () => void;
}

const ToggelButton = ({ handelNav }: IProps) => {
  return (
    <div className="lg:hidden block" onClick={handelNav}>
      <Button cssClasses="text-white mx-auto bg-yellow-gradient px-3 h-16 w-20 h-16 font-bold flex justify-center items-center">
        <AiOutlineMenu size={30} />
      </Button>
    </div>
  );
};

export default ToggelButton;
