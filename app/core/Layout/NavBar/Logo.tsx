import Image from "next/image";
import { logo } from "../../../../assets";

const Logo = () => {
  return (
    <div className="flex pl-20">
      <Image src={logo} alt="peaqock_logo" width={180} height={35} />
    </div>
  );
};

export default Logo;
