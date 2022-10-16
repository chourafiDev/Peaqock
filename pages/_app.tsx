import "../styles/globals.css";
import "antd/dist/antd.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1fa2b1" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
