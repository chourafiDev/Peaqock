import About from "../../app/components/About";
import Banner from "../../app/components/Banner";
import Membership from "../../app/components/Membership";
import NewsLetter from "../../app/components/NewsLetter";
import Services from "../../app/components/Services";
import Statistics from "../../app/components/Statistics";
import AppLayout from "../../app/core/Layouts/Layout";

const index = () => {
  return (
    <AppLayout>
      <main>
        <Banner />
        <Statistics />
        <Services />
        <About />
        <Membership />
        <NewsLetter />
      </main>
    </AppLayout>
  );
};

export default index;
