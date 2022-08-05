import Image from "next/future/image";
import EventCarousel from "../src/components/EventCarousel";
import Hero from "../src/components/Hero";
import RoundButton from "../src/components/RoundButton";
import Typography from "../src/components/Typography";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <BaseLayout collapsedNavBar={false}>
      <Hero />
      <main className={styles.infoContainer}>
        <div className={styles.aboutContainer}>
          <Image
            src="/club-photo.jpg"
            height={756}
            width={1008}
            alt="Organization chart"
            className={styles.orgChart}
          />
          <div className={styles.about}>
            <Typography variant="header" className={styles.aboutHeading}>
              What we do
            </Typography>
            <Typography variant="body">
              ScottyLabs is a student organization at Carnegie Mellon University
              devoted to helping students learn about and explore interesting
              topics in technology. We organize educational events to help
              people learn how to make things, host workshops to give students
              the opportunity to work on projects outside of class, and develop
              applications and services for the campus community.
            </Typography>
          </div>
        </div>
        <div className={styles.involvementSection}>
          <RoundButton label="Get involved" href="https://google.com/" />
          <div className={styles.meetingTimes}>
            <Typography>Weekly meetings: Thursday, 7pm</Typography>
            <Typography>Tech: Saturday, 2pm</Typography>
            <Typography>Design: Saturday, 2pm</Typography>
          </div>
        </div>
      </main>
      <EventCarousel />
    </BaseLayout>
  );
}
