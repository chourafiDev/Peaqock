import NavLinks from "./NavLinks";
import User from "./User";

const Index = () => {
  return (
    <nav className="pl-20">
      <div className="flex items-center justify-end gap-8 p-5 border-b">
        <NavLinks />
        <User />
      </div>
    </nav>
  );
};

export default Index;
