import { useEffect } from "react";
import { GradientController } from "./controller";
import styles from "./index.module.scss";

type GradientColors = [string, string, string, string];

const GRADIENT_COLORS: GradientColors = [
  "#F60101",
  "#272A92",
  "#00E7D6",
  "#0780BA",
];

const Gradient = ({
  gradientColors = GRADIENT_COLORS,
  className,
  ...props
}: {
  gradientColors?: GradientColors;
  className?: string;
}) => {
  useEffect(() => {
    const gradient = new GradientController(gradientColors);
    gradient.initGradient("#gradient-canvas");
  }, [gradientColors]);

  return (
    <canvas
      className={`${styles.canvas} ${className}`}
      id="gradient-canvas"
      data-transition-in
      {...props}
    />
  );
};

export default Gradient;
