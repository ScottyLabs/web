import Icon from "../Icon";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  /**
   * Show the bounding box of the wrapper in black, and the bounding box of the
   * inner svg in yellow.
   */
  debugBbox?: boolean;
}

export default function FacebookIcon({
  className,
  debugBbox,
}: Props): JSX.Element {
  return (
    <Icon className={className} debugBbox={debugBbox}>
      <svg
        className={styles.FacebookIcon}
        version="1.1"
        id="svg48"
        width="300"
        height="300"
        viewBox="0 0 300.00001 300.00001"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs52" />
        <g id="g56" transform="matrix(0.29296875,0,0,-0.29296875,0,300)">
          <g id="g58" transform="scale(0.1)">
            <path
              d="m 10240,5120 c 0,2827.7 -2292.3,5120 -5120,5120 C 2292.3,10240 0,7947.7 0,5120 0,2564.46 1872.31,446.301 4320,62.1992 V 3640 H 3020 v 1480 h 1300 v 1128 c 0,1283.2 764.38,1992 1933.9,1992 560.17,0 1146.1,-100 1146.1,-100 V 6880 H 6754.38 C 6118.35,6880 5920,6485.33 5920,6080.43 V 5120 H 7340 L 7113,3640 H 5920 V 62.1992 C 8367.69,446.301 10240,2564.46 10240,5120"
              id="path60"
            />
          </g>
        </g>
      </svg>
    </Icon>
  );
}
