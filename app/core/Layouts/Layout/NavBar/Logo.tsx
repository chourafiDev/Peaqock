import Image from "next/image";
import { logo } from "../../../../../assets/images";

const Logo = () => {
  return (
    <div className="flex w-40">
      <Image src={logo} alt="peaqock_logo" className="" />
    </div>
  );
};

export default Logo;
