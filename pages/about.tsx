import BaseLayout from "../src/layouts/BaseLayout";
import Typography from "../src/components/Typography";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <BaseLayout collapsedNavBar={true}>
      <div className={styles.pageContent}>
        <Typography variant="header">About</Typography>
      </div>
    </BaseLayout>
  )
}