import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../../../components/Utils/Button";

interface IProps {
  handleNav: () => void;
}

const ToggleButton = ({ handleNav }: IProps) => {
  return (
    <div className="lg:hidden block" onClick={handleNav}>
      <Button cssClasses="btn-primary p-2 rounded-md shadow-custom">
        <AiOutlineMenu size={20} />
      </Button>
    </div>
  );
};

export default ToggleButton;
