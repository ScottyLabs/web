import type { ReactNode } from "react";
import Typography from "../Typography";
import styles from "./index.module.scss";

interface Props {
  children?: ReactNode;
}

export default function Members({ children }: Props) {
  const members = Array.isArray(children) ? children : [children];

  return (
    <div className={styles.container}>
      <Typography variant="subheader">Members</Typography>
      <div className={styles.membersGrid}>
        {members.map((member: ReactNode, index) => (
          <div key={index}>{member}</div>
        ))}
      </div>
    </div>
  );
}
