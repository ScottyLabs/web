import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../src/components/Gradient";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Gradient />
      <Navbar />
      <main className={styles.container}>
        <div className={styles.heroImage}>
          <Image
            width={350}
            height={350}
            src="/icons/scotty-dog.svg"
            alt="ScottyLabs icon"
          />
        </div>
        <div className={styles.heroTitle}>ScottyLabs</div>
      </main>
    </div>
  );
};

export default Home;
