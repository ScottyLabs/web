import Image from "next/image";
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
          <RoundButton label="Get involved" href="#" />
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
