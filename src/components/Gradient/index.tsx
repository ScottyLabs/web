import { useEffect } from "react";
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
    if (window?.Gradient != null) {
      const gradient = new window.Gradient();
      gradient.freqX = 14e-5;
      gradient.freqY = 29e-5;
      gradient.freqDelta = 1e-4;
      gradient.amp = 100;
      gradient.initGradient("#gradient-canvas");
    }
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
