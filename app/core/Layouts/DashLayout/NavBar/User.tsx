import { FaUserAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

const User = () => {
  return (
    <Link href="#">
      <a className="relative flex items-center gap-2 before:absolute before:-left-4 before:top-0 before:bg-primary before:h-5 before:w-[1px]">
        <div className="flex items-center gap-1">
          <span className="uppercase text-primary">User Name</span>
          <BiChevronDown className="text-primary" />
        </div>
        <FaUserAlt className="text-primary" />
      </a>
    </Link>
  );
};

export default User;
