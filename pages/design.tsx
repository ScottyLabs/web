import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Typography from "../src/components/Typography";
import AfterEffectsIcon from "../src/icons/AfterEffectsIcon";
import FigmaIcon from "../src/icons/FigmaIcon";
import IllustratorIcon from "../src/icons/IllustratorIcon";
import ProcreateIcon from "../src/icons/ProcreateIcon";
import styles from "../styles/Design.module.scss";

const Design: NextPage = () => {
  return (
    <>
      <Head>
        <title>ScottyLabs</title>
        <meta name="description" content="ScottyLabs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.pageContainer}>
        <main>
          <Navbar collapsed={true} />
          <div className={styles.pageContent}>
            <Typography variant="header">Design</Typography>
            <div className={styles.aboutSection}>
              <Typography variant="body">
                Design is a ScottyLabs team branch that works on the event
                branding, merchandising, and UI designs for all ScottyLabs
                projects and events.
              </Typography>

              <div className={styles.softwareIconContainer}>
                <FigmaIcon className={styles.softwareIcon} />
                <IllustratorIcon className={styles.softwareIcon} />
                <ProcreateIcon className={styles.softwareIcon} />
                <AfterEffectsIcon className={styles.softwareIcon} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Design;
