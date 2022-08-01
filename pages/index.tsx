import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../src/components/Carousel";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
