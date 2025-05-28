import Image from 'next/image';
import Event from 'components/Event';
import Timeline from 'components/Timeline';
import Typography from 'components/Typography';
import BaseLayout from 'layouts/BaseLayout';
import styles from 'styles/Events.module.scss';

export default function Events() {
	return (
		<BaseLayout collapsedNavBar>
			<div className={styles.pageContent}>
				<Typography variant="header">Events</Typography>
				<div className={styles.aboutSection}>
					<Typography variant="body">
						On the Events side, we put together awesome events for
						the CMU community, which involves working with
						logistics, food, and content!
					</Typography>
				</div>
				<Timeline className={styles.projectTimeline}>
					<Event
						title="NOVA"
						description="NOVA is a one-day event focusing on emerging technologies where participants build a project using cutting-edge technologies of their choice, attending workshops, and interacting with mentors. The event will culminate in a project expo, in which participants' efforts will be showcased to judges and sponsors."
						date="9 November 2024"
						image={
							<Image
								src="/design/nova.png"
								width={2266}
								height={1248}
								alt="NOVA"
							/>
						}
					/>
					<Event
						title="TartanHacks"
						description="Every year, ScottyLabs hosts Pittsburgh's largest hackathon TartanHacks. Over the span of an action-packed weekend, hackers come together and create fantastic projects"
						date="7-8 February 2025"
						image={
							<Image
								src="/design/tartanhacks.png"
								width={1920}
								height={1080}
								alt="TartanHacks"
							/>
						}
					/>
					<Event
						title="ScottySpark"
						description="ScottySpark is an annual team idea competition for technology solutions to improve our campus. It’s a great event to flex your ideation skills and win some cool prizes"
						date="April 2025"
						image={
							<Image
								src="/design/scottyspark.png"
								width={1920}
								height={1080}
								alt="ScottySpark"
							/>
						}
					/>
					<Event title="Join the team!" />
				</Timeline>
			</div>
		</BaseLayout>
	);
}
