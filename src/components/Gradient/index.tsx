import { useEffect } from "react";
import styles from "./index.module.scss";

type GradientColors = [string, string, string, string];

const GRADIENT_COLORS: GradientColors = [
  "#F60101",
  "#272A92",
  "#00E7D6",
  "#0780BA",
];

const AnimatedGradient = ({
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

/**
 * Expanded gradient with a wave-masked bottom border.
 * Used in the home page with the hero icon
 */
export const ExpandedGradient = () => {
  return (
    <div className={styles.gradientContainer}>
      <AnimatedGradient className={styles.gradient} />
      <svg width={0} height={0}>
        <defs>
          <clipPath id="gradientClipPath" clipPathUnits="objectBoundingBox">
            <path
              className={styles.gradientPath}
              d="M0,0.8 C0.4,1 0.6,0.4 1,0.6 L1,0 L0,0 Z"
            />
            <path
              className={styles.gradientPathSmall}
              d="M0,0.8 C0.4,1 0.6,0.65 1,0.75 L1,0 L0,0 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

/**
 * Collapsed static gradient
 * Used on non-home pages
 */
export const CollapsedGradient = () => {
  return <div className={styles.staticGradient} />;
};
