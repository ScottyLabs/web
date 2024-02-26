// import Image from 'next/image';
import Project from 'components/Project';
import Timeline from 'components/Timeline';
import Typography from 'components/Typography';
import BaseLayout from 'layouts/BaseLayout';
import styles from 'styles/Labrador.module.scss';

export default function Labrador() {
	return (
		<BaseLayout collapsedNavBar>
			<div className={styles.pageContent}>
				<Typography variant="header">Labrador</Typography>
				<div className={styles.aboutSection}>
					<Typography variant="body">
						The Labrador committee works on new projects from the
						ground-up that tech may take on in the future. Think of
						Labrador like ScottyLabs&apos; own internal
						&quot;startup&quot; accelerator for tech projects.
					</Typography>
				</div>
				<Timeline className={styles.projectTimeline}>
					<Project
						title="Veg"
						softwareIcons={[
							'javascript',
							'typescript',
							// 'react-native',
							// 'firebase',
						]}
						description="Centralized grocery and expense management for housemates. Automated receipt splitting and shopping list tracking.."
						// link="https://N/A.com/"
						// image={
						// 	<Image
						// 		src="/labrador/N/A.png"
						// 		width={1920}
						// 		height={1080}
						// 		alt="N/A"
						// 	/>
						// }
					/>
					<Project
						title="CMUMaps"
						softwareIcons={[
							'typescript',
							'nextjs',
							'react',
							'mongodb',
							// 'applemapkit'
						]}
						description="Google Maps for CMU. Indoor room-level navigation, information, and availability for all buildings across the CMU campus."
						// link="https://N/A.com/"
						// image={
						// 	<Image
						// 		src="/labrador/N/A.png"
						// 		width={1920}
						// 		height={1080}
						// 		alt="N/A"
						// 	/>
						// }
					/>
					<Project
						title="CMUSeats"
						softwareIcons={[
							'javascript',
							'typescript',
							'mongodb',
							// 'express',
							'react',
						]}
						description="Crowdsourced study spot availability platform (starting with Gates)."
						// link="https://N/A.com/"
						// image={
						// 	<Image
						// 		src="/labrador/N/A.png"
						// 		width={1920}
						// 		height={1080}
						// 		alt="N/A"
						// 	/>
						// }
					/>
					<Project title="Join the team!" />
				</Timeline>
			</div>
		</BaseLayout>
	);
}
