import clsx from "clsx";
import Link from "next/link";
import type { IconName } from "../../icons/Icon";
import Icon from "../../icons/Icon";
import LinkIcon from "../../icons/LinkIcon";
import wrapElement from "../../utils/wrapElement";
import Show from "../Show";
import Typography from "../Typography";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  title: string;
  link?: string;
  description?: string;
  image?: JSX.Element;
  softwareIcons?: IconName[];
}

export default function Project({
  className,
  title,
  link,
  description,
  image,
  softwareIcons,
}: Props) {
  let projectTitle = (
    <Typography variant="subheader" className={styles.projectTitle}>
      {title}
    </Typography>
  );
  if (link) {
    projectTitle = (
      <Link href={link} passHref>
        <a target="_blank" rel="noreferrer" className={styles.projectLink}>
          <Typography variant="subheader" className={styles.projectTitle}>
            {title}
          </Typography>
          <LinkIcon
            className={clsx(styles.softwareIcon, styles.projectLinkIcon)}
          />
        </a>
      </Link>
    );
  }
  return (
    <div className={clsx(styles.projectContainer, className)}>
      <div className={styles.projectDetails}>
        {projectTitle}
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
