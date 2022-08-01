import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";

function MyApp({ Component, pageProps }: AppProps) {
  library.add(faBars);
  library.add(faCircle);
  return <Component {...pageProps} />;
}

export default MyApp;
