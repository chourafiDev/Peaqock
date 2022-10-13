import Footer from "./Footer";
import NavBar from "./NavBar";

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
