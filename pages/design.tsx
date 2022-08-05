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
            title="Branding"
            softwareIcons={["typescript", "react"]}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            image={
              <Image
                src="/tech/course-tool.jpg"
                width={1404}
                height={1053}
                alt="Course tool"
              />
            }
          />
          <Project
            title="UI/UX"
            softwareIcons={["typescript", "react"]}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            image={
              <Image
                src="/tech/course-tool.jpg"
                width={1404}
                height={1053}
                alt="Course tool"
              />
            }
          />
          <Project title="Join the team!" />
        </ProjectTimeline>
      </div>
    </BaseLayout>
  );
}
