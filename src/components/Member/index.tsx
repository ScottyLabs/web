import styles from "./index.module.scss";
import Typography from "../Typography";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  image?: JSX.Element;
  name: string;
  role: string;
}

export default function Member({ image, name, role }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {image != null ? image : <FontAwesomeIcon icon={faUserCircle} />}
      </div>
      <div className={styles.title}>
        <Typography variant="body">{name}</Typography>
        <Typography variant="subtitle">{role}</Typography>
      </div>
    </div>
  );
}
