import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <img src="/icons/scotty-dog.svg" alt="ScottyLabs icon" />
      </div>
      <div className={styles.navbarRight}>
        <Link href="/about" passHref>
          <a className={`link ${styles.navLink}`}>/about</a>
        </Link>
        <Link href="/tech" passHref>
          <a className={`link ${styles.navLink}`}>/tech</a>
        </Link>
        <Link href="/design" passHref>
          <a className={`link ${styles.navLink}`}>/design</a>
        </Link>
        <Link href="/events" passHref>
          <a className={`link ${styles.navLink}`}>/events</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
