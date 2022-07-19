import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../src/components/Gradient";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Gradient />
    </div>
  );
};

export default Home;
