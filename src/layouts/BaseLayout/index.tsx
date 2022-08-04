import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.scss";

interface Props {
  children?: ReactNode | ReactNode[];
  collapsedNavBar?: boolean;
}

/**
 * The base layout which includes the ScottyLabs header,
 * a navbar, and a footer
 */
export default function BaseLayout({
  children,
  collapsedNavBar = true,
}: Props) {
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
}
