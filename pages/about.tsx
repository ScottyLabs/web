import BaseLayout from "../src/layouts/BaseLayout";
import Typography from "../src/components/Typography";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Members from "../src/components/Members";
import Member from "../src/components/Member";

export default function About() {
  return (
    <BaseLayout collapsedNavBar={true}>
      <div className={styles.pageContent}>
        <Typography variant="header">About</Typography>
        <div className={styles.descriptionContainer}>
          <div className={styles.aboutPicContainer}>
            <Image
              src="/about/organization-chart.png"
              width={2016}
              height={945}
              alt="Organization chart"
            />
          </div>
          <div className={styles.about}>
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
        <Members>
          <Member role="Director" name="John Doe" />
        </Members>
      </div>
    </BaseLayout>
  );
}
