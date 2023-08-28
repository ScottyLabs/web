import Image from 'next/image';
import EventCarousel from '../src/components/EventCarousel';
import Hero from '../src/components/Hero';
import RoundButton from '../src/components/RoundButton';
import Typography from '../src/components/Typography';
import BaseLayout from '../src/layouts/BaseLayout';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<BaseLayout collapsedNavBar={false}>
			<Hero />
			<main className={styles.infoContainer}>
				<div className={styles.aboutContainer}>
					<div className={styles.about}>
						<Typography
							variant="header"
							className={styles.aboutHeading}
						>
							What we do
						</Typography>
						<Typography variant="body">
							ScottyLabs is a student organization at Carnegie
							Mellon University devoted to helping students learn
							about and explore interesting topics in technology.
							We organize educational events to help people learn
							how to make things, host workshops to give students
							the opportunity to work on projects outside of
							class, and develop applications and services for the
							campus community.
						</Typography>
					</div>
					<div className={styles.clubPhotoContainer}>
						<Image
							src="/club-photo.jpg"
							width={2016}
							height={1512}
							alt="Organization chart"
						/>
					</div>
				</div>
				<div className={styles.involvementSection}>
					<div className={styles.joinButtons}>
						<RoundButton
							label="Get involved"
							href="https://tartanconnect.cmu.edu/scottylabs/club_signup"
						/>
					</div>
					<div className={styles.meetingTimes}>
						<Typography variant="header">Meet Us!</Typography>
						<br />
						<Typography>
							Club Fair: September 6, 4:30-6:30pm, The Cut
						</Typography>
						<br />
						<Typography>
							First Weekly GBM: September 13, 5:30-6:30pm, Wean 5415
						</Typography>
						<br />
						<Typography>
							First Committee Work Sessions: September 16, 3-5pm
						</Typography>
						<div className={styles.meetingRooms}>
							<Typography>Tech</Typography>
							<Typography>Wean Hall</Typography>
							{/* <Typography>POS 153</Typography> */}
							<Typography>Design</Typography>
							<Typography>Wean Hall</Typography>
							{/* <Typography>POS 152</Typography> */}
							<Typography>Finance</Typography>
							<Typography>Wean Hall</Typography>
							{/* <Typography>POS 147</Typography> */}
							<Typography>Events/Outreach</Typography>
							<Typography>Wean Hall</Typography>
							{/* <Typography>POS 151</Typography> */}
						</div>
					</div>
				</div>
			</main>
			<Typography variant="header" centered>
				Our Events
			</Typography>
			<EventCarousel />
		</BaseLayout>
	);
}
