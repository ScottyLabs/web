import styles from "./index.module.scss";
import Typography from "../Typography";

interface Props{
  image: JSX.Element;
  name: string;
  role: string;
}

export default function Member({ image, name, role }: Props) {
  <div className={styles.container}>
    <div className={styles.avatar}>
      {image}
    </div>
    <Typography variant="subtitle">{name}</Typography>
    <Typography variant="subtitle">{role}</Typography>
  </div>
}