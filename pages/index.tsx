import type { NextPage } from "next";
import Head from "next/head";
import About from "../app/components/About";
import HomePage from "../routes/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PEAQOCK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      {/* <div className="bg-primary h-100vh">
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div> */}
    </>
  );
};

export default Home;
