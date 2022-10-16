import Logo from "./Logo";
import { HiOutlineX } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import NavBarButtons from "./NavBarButtons";

interface IProps {
  nav: boolean;
  handelNav: () => void;
}

const ResponsiveNav = ({ nav, handelNav }: IProps) => {
  const links = [
    { link: "/About", name: "About" },
    { link: "/Membership", name: "Membership" },
    { link: "/News", name: "News & Events" },
    { link: "/Contact", name: "Contact us" },
  ];

  return (
    <nav
      className={
        nav
          ? "lg:hidden fixed left-0 top-0 w-full h-full bg-gray-opacity backdrop-blur-[5px] z-50"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] h-full overflow-y-scroll md:w-[45%] border-r border-white/5 bg-primary/50 backdrop-blur-[8px] duration-700 ease"
            : "fixed left-[-100%] top-0 p-10 duration-700 ease h-full"
        }
      >
        <div className="border-b border-white/40 pb-4 p-6">
          <div className="flex justify-between w-full items-center">
            <Logo />
            <div
              onClick={handelNav}
              className="text-white border border-white/50 rounded-full p-2"
            >
              <HiOutlineX />
            </div>
          </div>
        </div>

        <ul className="p-6 flex flex-col gap-10 font-medium text-lg">
          {links.map(({ link, name }) => (
            <li key={name}>
              <Link href={link}>
                <a className="flex gap-3 items-center text-white hover:text-white">
                  <span>{name}</span> <BsChevronDown size={12} />
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 w-full">
          <NavBarButtons />
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
