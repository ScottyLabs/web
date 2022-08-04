import Head from "next/head";
import { ReactElement } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.scss";

interface Props {
  children?: ReactElement | ReactElement[];
  collapsedNavBar?: Boolean;
}

/**
 * The base layout which includes the ScottyLabs header,
 * a navbar, and a footer
 */
const BaseLayout = ({ children, collapsedNavBar = true }: Props) => {
  return (
    <>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.pageContainer}>
        <main>
          <Navbar collapsed={collapsedNavBar} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
