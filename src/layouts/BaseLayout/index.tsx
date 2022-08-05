import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.scss";

interface Props {
  children?: ReactNode;
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
        <meta name="og:title" content="ScottyLabs" />
        <meta
          name="og:description"
          content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
        />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/scottylabs-preview.png" />
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
