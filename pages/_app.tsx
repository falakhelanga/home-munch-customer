import LayOut from "../components/layouts";
import Data from "../context/data";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Data>
      <LayOut>
        <Component {...pageProps} />
        <ToastContainer />
      </LayOut>
    </Data>
  );
}
