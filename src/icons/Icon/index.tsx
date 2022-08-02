import styles from "./index.module.scss";

interface Props {
  children?: JSX.Element;
  className?: string;
  debugBbox?: boolean;
  verticalScale?: number;
}

export default function Icon({
  children,
  className,
  debugBbox,
  verticalScale = 1,
}: Props): JSX.Element {
  const verticalSize = `${verticalScale * 100}%`;
  return (
    <div className={className}>
      <div
        className={debugBbox ? styles.svgIconDebug : styles.svgIconContainer}
        style={{ paddingTop: verticalSize }}
      >
        {children}
      </div>
    </div>
  );
}
