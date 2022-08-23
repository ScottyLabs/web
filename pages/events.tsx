import Image from "next/future/image";
import Event from "../src/components/Event";
import Timeline from "../src/components/Timeline";
import Typography from "../src/components/Typography";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Design.module.scss";

export default function Events() {
  return (
    <BaseLayout collapsedNavBar={true}>
      <div className={styles.pageContent}>
        <Typography variant="header">Events</Typography>
        <div className={styles.aboutSection}>
          <Typography variant="body">
            Events is a ScottyLabs committee that works on exploring, ideating,
            and organizing various events throughout the year.
          </Typography>
        </div>
        <Timeline className={styles.projectTimeline}>
          <Event
            title="Web Development Weekend"
            description={
              "A series of workshops that teach beginners important web development skills"
            }
            date="October 2022"
            image={
              <Image
                src="/design/wdw.png"
                width={820}
                height={312}
                alt="Web Development Weekend"
              />
            }
          />
          <Event
            title="Crash Course"
            description={"A software workshop series by ScottyLabs"}
            date="??? 2022"
            image={
              <Image
                src="/design/crash-course.png"
                width={1920}
                height={1005}
                alt="Crash Course"
              />
            }
          />
          <Event
            title="TartanHacks"
            description={
              "Every year, ScottyLabs hosts Pittsburgh's largest hackathon TartanHacks."
            }
            date="February 2023"
            image={
              <Image
                src="/design/tartanhacks.png"
                width={1920}
                height={1080}
                alt="TartanHacks"
              />
            }
          />
          <Event title="Join the team!" />
        </Timeline>
      </div>
    </BaseLayout>
  );
}
