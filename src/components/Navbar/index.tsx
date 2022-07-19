import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <Link href="/" passHref>
          <a>
            <Image
              width={32}
              height={32}
              src="/icons/scotty-dog.svg"
              alt="ScottyLabs icon"
            />
          </a>
        </Link>
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
