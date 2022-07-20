import Image from "next/image";
import styles from "./index.module.scss";

/**
 * Hero component containing the ScottyLabs icon
 * and the title
 */
const Hero = () => {
  return (
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
  );
};

export default Hero;
