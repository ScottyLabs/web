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
      <div className={styles.gradientContainer}>
        <Gradient className={styles.gradient} />
        <svg width={0} height={0}>
          <defs>
            <clipPath id="gradientClipPath" clipPathUnits="objectBoundingBox">
              <path d="M0,0.8 C0.4,1 0.6,0.5 1,0.7 L1,0 L0,0 Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Navbar />
      <main className={styles.mainContainer}>
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
