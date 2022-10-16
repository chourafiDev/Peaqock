import Image from "next/image";
import { smallLogo } from "../../../../assets/images";

const Logo = () => {
  return (
    <div className="w-full flex justify-center w-10">
      <Image src={smallLogo} alt="logo" />
    </div>
  );
};

export default Logo;
