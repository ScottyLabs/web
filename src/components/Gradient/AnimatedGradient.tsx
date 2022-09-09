import clsx from "clsx";
import { useEffect } from "react";
import { SubGradientProps } from ".";
import styles from "./index.module.scss";

export default function AnimatedGradient({ className }: SubGradientProps) {
  useEffect(() => {
    if (window?.Gradient != null) {
      const gradient = new window.Gradient();
      gradient.freqX = 14e-5;
      gradient.freqY = 29e-5;
      gradient.freqDelta = 1e-4;
      gradient.amp = 100;
      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  return (
    <canvas
      className={clsx(styles.canvas, className)}
      id="gradient-canvas"
      data-transition-in
    />
  );
}
