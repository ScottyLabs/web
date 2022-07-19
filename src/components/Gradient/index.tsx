import { useEffect } from "react";
import { GradientController } from "./controller";
import styles from "./index.module.scss";

const GRADIENT_COLORS = ["#F60101", "#272A92", "#00E7D6", "#0780BA"];

const Gradient = ({
  gradientColors = GRADIENT_COLORS,
}: {
  gradientColors?: string[];
}) => {
  useEffect(() => {
    const gradient = new GradientController(gradientColors);
    gradient.initGradient("#gradient-canvas");
  }, [gradientColors]);

  return (
    <canvas className={styles.canvas} id="gradient-canvas" data-transition-in />
  );
};

export default Gradient;
