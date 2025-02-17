import Image from 'next/image';
import Project from 'components/Project';
import Timeline from 'components/Timeline';
import Typography from 'components/Typography';
import AfterEffectsIcon from 'icons//AfterEffectsIcon';
import FigmaIcon from 'icons//FigmaIcon';
import IllustratorIcon from 'icons//IllustratorIcon';
import ProcreateIcon from 'icons//ProcreateIcon';
import BaseLayout from 'layouts/BaseLayout';
import styles from 'styles/Design.module.scss';

export default function Design() {
	return (
		<BaseLayout collapsedNavBar>
			<div className={styles.pageContent}>
				<Typography variant="header">Design</Typography>
				<div className={styles.aboutSection}>
					<Typography variant="body">
						Design is a ScottyLabs committee that works on the event
						branding, merchandising, and UI designs for all
						ScottyLabs projects and events.
					</Typography>
					<div className={styles.softwareIconContainer}>
						<FigmaIcon className={styles.softwareIcon} />
						<IllustratorIcon className={styles.softwareIcon} />
						<ProcreateIcon className={styles.softwareIcon} />
						<AfterEffectsIcon className={styles.softwareIcon} />
					</div>
				</div>
				<Timeline className={styles.projectTimeline}>
					<Project
						title="TartanHacks"
						softwareIcons={[
							'figma',
							'illustrator',
							'after-effects',
						]}
						description="Every year, ScottyLabs hosts Pittsburgh's largest hackathon TartanHacks. The event's logo, merchandise, advertisements and motion graphics are designed for a different theme and visual language"
						image={
							<Image
								src="/design/tartanhacks.png"
								width={1920}
								height={1080}
								alt="TartanHacks"
							/>
						}
					/>
					<Project
						title="NOVA Branding"
						softwareIcons={['illustrator', 'figma', 'procreate']}
						description="Promotional Graphics and Branding for NOVA, a one-day event focusing on emerging technologies"
						image={
							<Image
								src="/design/nova.png"
								width={2266}
								height={1248}
								alt="NOVA"
							/>
						}
					/>
					<Project
						title="TartanHacks Registration UI/UX"
						softwareIcons={['figma', 'illustrator']}
						description="UI/UX for the TartanHacks Registration and Dashboard apps"
						image={
							<Image
								src="/design/tartanhacks-registration.jpg"
								width={800}
								height={449}
								alt="TartanHacks Registration"
							/>
						}
					/>
					<Project
						title="ScottySpark Branding"
						softwareIcons={['illustrator', 'figma', 'procreate']}
						description="Promotional Graphics for ScottySpark, an annual team idea competition for technology solutions to improve our campus"
						image={
							<Image
								src="/design/scottyspark.png"
								width={1920}
								height={1080}
								alt="Crash Course"
							/>
						}
					/>
					<Project title="Join the team!" />
				</Timeline>
			</div>
		</BaseLayout>
	);
}
