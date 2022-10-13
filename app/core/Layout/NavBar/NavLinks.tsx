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
    <div>
      <ul className="flex items-center gap-8 text-white uppercase font-normal">
        {links.map(({ link, name }) => (
          <li key={name}>
            <Link href={link}>
              <a className="flex gap-3 items-center">
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