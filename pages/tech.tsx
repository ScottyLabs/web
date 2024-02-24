import Image from 'next/legacy/image';
import Project from '../src/components/Project';
import Timeline from '../src/components/Timeline';
import Typography from '../src/components/Typography';
import BaseLayout from '../src/layouts/BaseLayout';
import styles from '../styles/Tech.module.scss';

export default function Tech() {
	return (
		<BaseLayout collapsedNavBar>
			<div className={styles.pageContent}>
				<Typography variant="header">Tech</Typography>
				<div className={styles.aboutSection}>
					<Typography variant="body">
						The Tech committee builds various fun software projects
						across the stack for the campus community!
					</Typography>
				</div>
				<Timeline className={styles.projectTimeline}>
					<Project
						title="CMU Courses"
						softwareIcons={[
							'javascript',
							'typescript',
							'react',
							'nextjs',
							'tailwind',
							'mongodb',
						]}
						description="CMU Courses is a course browser built by and for CMU students. Bringing together course information, schedules and FCE data, it makes it possible for CMU students to plan their semesters and browse for courses."
						link="https://cmucourses.com"
						image={
							<Image
								src="/tech/cmu-courses.png"
								width={1920}
								height={1080}
								alt="CMU Courses"
							/>
						}
					/>
					<Project
						title="CMUEats"
						softwareIcons={['typescript', 'react']}
						description="CMUEats is your one-stop-shop for finding out what campus dining locations right now."
						link="https://cmueats.com/"
						image={
							<Image
								src="/tech/cmueats.jpg"
								width={1920}
								height={1080}
								alt="CMU Eats"
							/>
						}
					/>
					<Project
						title="Lost and Found"
						softwareIcons={['typescript', 'react', 'mongodb']}
						description="Official lost-and-found website adopted by CMU"
						link="https://lostandfound.andrew.cmu.edu/"
						image={
							<Image
								src="/tech/lost-and-found.png"
								width={1280}
								height={720}
								alt="CMU Lost and Found"
							/>
						}
					/>
					<Project
						title="scotty.lol"
						softwareIcons={['typescript', 'mongodb', 'react']}
						description={
							"Scottylol is an exciting search tool for CMU. It is ScottyLabs' implementation of Facebook's internal bunnylol search tool."
						}
						link="https://scotty.lol"
						image={
							<Image
								src="/tech/scotty-lol.jpeg"
								width={1920}
								height={1080}
								alt="scotty.lol"
							/>
						}
					/>
					<Project
						title="ScottyMaps"
						softwareIcons={[
							'openstreetmap',
							'java',
							'javascript',
							'flutter',
						]}
						description="Providing indoor maps and navigation for the CMU campus"
					/>
					<Project
						title="TartanHacks Website"
						softwareIcons={['typescript', 'react', 'nextjs']}
						description={
							"Promotional website for TartanHacks, Pittsburgh's largest hackathon"
						}
						link="https://tartanhacks.com"
						image={
							<Image
								src="/tech/tartanhacks-website.png"
								width={1920}
								height={1080}
								alt="TartanHacks Website"
							/>
						}
					/>
					<Project
						title="TartanHacks Registration System"
						softwareIcons={['typescript', 'react', 'nextjs']}
						description="Registration portal for hackers to sign up for TartanHacks"
						image={
							<Image
								src="/tech/tartanhacks-registration.jpg"
								width={1920}
								height={1080}
								alt="TartanHacks Registration"
							/>
						}
					/>
					<Project
						title="TartanHacks Dashboard"
						softwareIcons={['flutter']}
						description="A mobile app that hackers use to navigate TartanHacks during the live event"
						image={
							<Image
								src="/tech/tartanhacks-dashboard.jpg"
								width={1920}
								height={1080}
								alt="TartanHacks Dashboard"
							/>
						}
					/>
					<Project
						title="TartanHacks Helix"
						softwareIcons={['typescript', 'mongodb']}
						description="Helix is the common backend system that connects our entire TartanHacks software suite together"
						image={
							<Image
								src="/tech/tartanhacks-backend.png"
								width={1920}
								height={1080}
								alt="TartanHacks Backend"
							/>
						}
					/>
					<Project title="Join the team!" />
				</Timeline>
			</div>
		</BaseLayout>
	);
}
