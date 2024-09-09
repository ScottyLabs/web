import Image from 'next/legacy/image';
import EventCarousel from 'components/EventCarousel';
import Hero from 'components/Hero';
import RoundButton from 'components/RoundButton';
import Typography from 'components/Typography';
import BaseLayout from 'layouts/BaseLayout';
import styles from 'styles/Home.module.scss';

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
							Weekly GBMs: Mondays, 6-7pm, Tepper
						</Typography>
						<br />
						<Typography>
							Committee Work Sessions: Saturdays, 4-6pm, Tepper
						</Typography>
						<div className={styles.meetingRooms}>
							<Typography>Tech</Typography>
							<Typography>Tepper</Typography>
							<Typography>Design</Typography>
							<Typography>Tepper</Typography>
							<Typography>Labrador</Typography>
							<Typography>Tepper</Typography>
							<Typography>Events/Outreach/Finance</Typography>
							<Typography>Tepper</Typography>
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
