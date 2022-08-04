import { ReactElement } from "react";
import Show from "../Show";
import Typography from "../Typography";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: ReactElement;
  softwareIcons?: ReactElement[];
}

export default function Project({
  className = "",
  title,
  description,
  image,
  softwareIcons,
}: Props) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectDetails}>
        <Typography variant="subheader">{title}</Typography>
        <div className={styles.softwareIcons}>
          <Show when={softwareIcons != null}>{softwareIcons}</Show>
        </div>
      </div>
    </div>
  );
}
