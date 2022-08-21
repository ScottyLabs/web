import clsx from "clsx";
import type { IconName } from "../../icons/Icon";
import Icon from "../../icons/Icon";
import wrapElement from "../../utils/wrapElement";
import Show from "../Show";
import Typography from "../Typography";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: JSX.Element;
  softwareIcons?: IconName[];
}

export default function Project({
  className = "",
  title,
  description,
  image,
  softwareIcons,
}: Props) {
  return (
    <div className={clsx(styles.projectContainer, className)}>
      <div className={styles.projectDetails}>
        <Typography variant="subheader" className={styles.projectTitle}>
          {title}
        </Typography>
        <div className={styles.softwareIconContainer}>
          <Show when={softwareIcons != null}>
            {softwareIcons?.map((iconName, index) => (
              <Icon
                name={iconName}
                key={index}
                className={styles.softwareIcon}
              />
            ))}
          </Show>
        </div>
        <Typography variant="body" className={styles.description}>
          {description}
        </Typography>
      </div>
      <div className={styles.projectImageContainer}>
        {image != null
          ? wrapElement(image as JSX.Element)({
              className: styles.projectImage,
            })
          : null}
      </div>
    </div>
  );
}
