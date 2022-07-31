import styles from "./index.module.scss";

interface Props {
  children?: JSX.Element;
  className?: string;
  verticalScale?: number;
}

export default function Icon({
  children,
  className,
  verticalScale = 1,
}: Props): JSX.Element {
  const verticalSize = `${verticalScale * 100}%`;
  return (
    <div className={className}>
      <div
        className={styles.svgIconContainer}
        style={{ paddingTop: verticalSize }}
      >
        {children}
      </div>
    </div>
  );
}
