import Image from "next/future/image";
import Project from "../src/components/Project";
import ProjectTimeline from "../src/components/ProjectTimeline";
import Typography from "../src/components/Typography";
import AfterEffectsIcon from "../src/icons/AfterEffectsIcon";
import FigmaIcon from "../src/icons/FigmaIcon";
import IllustratorIcon from "../src/icons/IllustratorIcon";
import ProcreateIcon from "../src/icons/ProcreateIcon";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Design.module.scss";

export default function Design() {
  return (
    <BaseLayout collapsedNavBar={true}>
      <div className={styles.pageContent}>
        <Typography variant="header">Design</Typography>
        <div className={styles.aboutSection}>
          <Typography variant="body">
            Design is a ScottyLabs team branch that works on the event branding,
            merchandising, and UI designs for all ScottyLabs projects and
            events.
          </Typography>
          <div className={styles.softwareIconContainer}>
            <FigmaIcon className={styles.softwareIcon} />
            <IllustratorIcon className={styles.softwareIcon} />
            <ProcreateIcon className={styles.softwareIcon} />
            <AfterEffectsIcon className={styles.softwareIcon} />
          </div>
        </div>
        <ProjectTimeline className={styles.projectTimeline}>
          <Project
            title="TartanHacks"
            softwareIcons={["figma", "illustrator", "after-effects"]}
            description={
              "Every year, ScottyLabs hosts Pittsburgh's largest hackathon TartanHacks. The event's logo, merchandise, advertisements and motion graphics are designed for a different theme and visual language"
            }
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
            title="Web Development Weekend Branding"
            softwareIcons={["illustrator", "figma", "procreate"]}
            description={
              "Promotional Graphics and Branding for WDW, a series of workshops, lectures and exercises practicing web development"
            }
            image={
              <Image
                src="/design/wdw.png"
                width={820}
                height={312}
                alt="Web Development Weekend"
              />
            }
          />
          <Project
            title="TartanHacks Registration UI/UX"
            softwareIcons={["figma", "illustrator"]}
            description={
              "UI/UX for the TartanHacks Registration and Dashboard apps"
            }
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
            title="Crash Course Branding"
            softwareIcons={["illustrator", "figma", "procreate"]}
            description={
              "Promotional Graphics for Crash Course, a collection of software workshops hosted by ScottyLabs"
            }
            image={
              <Image
                src="/design/crash-course.png"
                width={1920}
                height={1005}
                alt="Crash Course"
              />
            }
          />
          <Project title="Join the team!" />
        </ProjectTimeline>
      </div>
    </BaseLayout>
  );
}
