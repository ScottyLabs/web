import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function ProjectTimeline({ className, children }: Props) {
  const projects = Array.isArray(children) ? children : [children];

  return (
    <div className={`${styles.timelineContainer} ${className}`}>
      {projects.map((project: ReactNode, index) => (
        <div className={styles.projectRow} key={index}>
          <FontAwesomeIcon icon={faCircle} className={styles.circleTop} />
          {project}
          <FontAwesomeIcon icon={faCircle} className={styles.circleBottom} />
        </div>
      ))}
    </div>
  );
}
