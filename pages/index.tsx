import type { NextPage } from "next";
import Head from "next/head";
import Gradient from "../src/components/Gradient";
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
      <Gradient />
    </div>
  );
};

export default Home;
