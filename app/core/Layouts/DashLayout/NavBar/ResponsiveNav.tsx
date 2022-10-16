import { HiOutlineX } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import Logo from "../Logo";

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
            ? "fixed right-0 top-0 w-[75%] sm:w-[60%] h-full overflow-y-scroll md:w-[45%] bg-primary duration-700 ease"
            : "fixed right-[-100%] top-0 p-10 duration-700 ease h-full"
        }
      >
        <div className="border-b border-white/40 p-3">
          <div className="flex justify-between w-full items-center">
            <div
              onClick={handelNav}
              className="text-white border border-white/50 rounded-full p-2"
            >
              <HiOutlineX />
            </div>
            <Logo />
          </div>
        </div>

        <ul className="p-6 flex flex-col gap-10 font-medium text-lg">
          {links.map(({ link, name }) => (
            <li key={name}>
              <Link href={link}>
                <a className="flex gap-3 items-center text-white">
                  <span>{name}</span> <BsChevronDown size={12} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
