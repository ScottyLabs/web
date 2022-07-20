import Image from "next/image";
import Link from "next/link";
import Gradient from "../Gradient";
import styles from "./index.module.scss";

/**
 * Toolbar containing just the navigation elements without
 * the gradient background
 */
const Toolbar = ({ showHomeIcon = true }: { showHomeIcon?: Boolean }) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        {showHomeIcon ? (
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
        ) : null}
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

/**
 * Final navbar with a gradient background.
 * If `home` is true, this expands to an entire hero component
 */
const Navbar = ({ home = false }: { home?: Boolean }) => {
  return (
    <div>
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
      <Toolbar showHomeIcon={!home} />
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            width={350}
            height={350}
            src="/icons/scotty-dog.svg"
            alt="ScottyLabs icon"
          />
        </div>
        <div className={styles.heroTitle}>ScottyLabs</div>
      </div>
    </div>
  );
};

export default Navbar;
