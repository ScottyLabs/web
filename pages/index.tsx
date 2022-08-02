import type { NextPage } from "next";
import Head from "next/head";
import EventCarousel from "../src/components/EventCarousel";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.pageContainer}>
        <main>
          <Navbar />
          <Hero />
          <EventCarousel />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
