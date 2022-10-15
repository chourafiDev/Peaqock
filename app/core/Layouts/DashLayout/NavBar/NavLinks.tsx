import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const NavLinks = () => {
  const links = [
    { link: "/About", name: "About" },
    { link: "/Membership", name: "Membership" },
    { link: "/News", name: "News & Events" },
    { link: "/Contact", name: "Contact us" },
  ];
  return (
    <div className="lg:block hidden">
      <ul className="flex items-center gap-8 uppercase m-0">
        {links.map(({ link, name }) => (
          <li key={name}>
            <Link href={link}>
              <a className="flex gap-3 items-center font-medium text-primary hover:text-primary">
                <span>{name}</span> <BsChevronDown size={12} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
