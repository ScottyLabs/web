import Image from "next/future/image";
import Link from "next/link";
import Typography from "../Typography";
import styles from "./index.module.scss";

const FooterLink = ({
  href,
  src,
  width,
  height,
  label,
}: {
  href: string;
  src: string;
  width: number;
  height: number;
  label: string;
}) => {
  return (
    <div className={styles.footerLink}>
      <Link href={href} passHref>
        <a>
          <Image
            className={styles.footerIcon}
            src={src}
            width={width}
            height={height}
            alt={label}
          />
        </a>
      </Link>
      <Link href={href} passHref>
        <a className={styles.footerLinkLabel}>
          <Typography variant="subtitle">{label}</Typography>
        </a>
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <svg width={0} height={0}>
        <defs>
          <clipPath id="footerClipPath" clipPathUnits="objectBoundingBox">
            <path
              className={styles.gradientPath}
              d="M0,0.4 C0.2,0 0.4,1 1,0 L1,1 L0,1 Z"
            />
          </clipPath>
        </defs>
      </svg>
      <FooterLink
        href="https://instagram.com/cmu.scottylabs"
        src="/icons/instagram.png"
        width={52}
        height={53}
        label="Instagram"
      />
      <FooterLink
        href="https://www.facebook.com/ScottyLabs"
        src="/icons/facebook.png"
        width={52}
        height={53}
        label="Facebook"
      />
      <FooterLink
        href="https://medium.com/tartanhacks"
        src="/icons/medium.png"
        width={55}
        height={55}
        label="Medium"
      />
      <FooterLink
        href="http://go.scottylabs.org/mattermost"
        src="/icons/mattermost.png"
        width={59}
        height={55}
        label="Mattermost"
      />
      <FooterLink
        href="mailto://hello@scottylabs.org"
        src="/icons/email.png"
        width={56}
        height={39}
        label="Email us!"
      />
    </div>
  );
};

export default Footer;
