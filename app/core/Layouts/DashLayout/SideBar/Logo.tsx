import Image from "next/image";
import { smallLogo } from "../../../../../assets/images";

const Logo = () => {
  return (
    <div className="w-full flex justify-center">
      <Image src={smallLogo} alt="logo" width={40} />
    </div>
  );
};

export default Logo;
