import Link from 'next/link';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import MailIcon from '../../icons/MailIcon';
import SlackIcon from '../../icons/SlackIcon';

import MediumIcon from '../../icons/MediumIcon';
import Typography from '../Typography';
import styles from './index.module.scss';

function FooterLink({
	href,
	icon,
	label,
}: {
	href: string;
	icon: JSX.Element;
	label: string;
}) {
	return (
		<div className={styles.footerLink}>
			<Link href={href} passHref>
				{icon}
			</Link>
			<Link href={href} passHref className={styles.footerLinkLabel}>
				<Typography variant="subtitle">{label}</Typography>
			</Link>
		</div>
	);
}

function Footer() {
	return (
		<footer className={styles.footer}>
			<svg width={0} height={0}>
				<defs>
					<clipPath
						id="footerClipPath"
						clipPathUnits="objectBoundingBox"
					>
						<path
							className={styles.gradientPath}
							d="M0,0.4 C0.2,0 0.4,0.8 1,0 L1,1 L0,1 Z"
						/>
						<path
							className={styles.gradientPathSm}
							d="M0,0.3 C0.3,0 0.6,0.8 1,0 L1,1 L0,1 Z"
						/>
					</clipPath>
				</defs>
			</svg>
			<FooterLink
				href="https://instagram.com/cmu.scottylabs"
				icon={<InstagramIcon className={styles.footerIcon} />}
				label="Instagram"
			/>
			<FooterLink
				href="https://www.facebook.com/ScottyLabs"
				icon={<FacebookIcon className={styles.footerIcon} />}
				label="Facebook"
			/>
			<FooterLink
				href="https://medium.com/tartanhacks"
				icon={<MediumIcon className={styles.footerIcon} />}
				label="Medium"
			/>
			<FooterLink
				href="http://go.scottylabs.org/slack"
				icon={<SlackIcon className={styles.footerIcon} />}
				label="Slack"
			/>
			<FooterLink
				href="mailto://hello@scottylabs.org"
				icon={<MailIcon className={styles.footerIcon} />}
				label="Email us!"
			/>
		</footer>
	);
}

export default Footer;
