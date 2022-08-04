import type { ReactNode } from "react";
import type { IconName } from "../../icons/Icon";
import Icon from "../../icons/Icon";
import Show from "../Show";
import Typography from "../Typography";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: ReactNode;
  softwareIcons?: IconName[];
}

export default function Project({
  className,
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
          <Show when={softwareIcons != null}>
            {softwareIcons?.map((iconName, index) => (
              <Icon name={iconName} key={index} />
            ))}
          </Show>
        </div>
      </div>
    </div>
  );
}
