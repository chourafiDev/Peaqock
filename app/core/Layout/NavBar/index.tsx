import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center z-40 bg-gray-opacity backdrop-blur-[5px]">
      <Logo />
      <div className="flex items-center gap-16">
        <NavLinks />
        <NavBarButtons />
      </div>
    </nav>
  );
};

export default NavBar;
