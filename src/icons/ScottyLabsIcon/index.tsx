import BaseIcon from "../BaseIcon";
import { SvgIconProps } from "../SvgIcon";
import styles from "./index.module.scss";

interface Props {
  /**
   * Make the icon slightly transparent
   */
  blendBackground?: boolean;
  dropShadow?: {
    dx?: number;
    dy?: number;
    stdDeviation?: number;
  };
}

export default function ScottyLabsIcon({
  blendBackground,
  dropShadow,
  className,
  debugBbox,
}: SvgIconProps & Props): JSX.Element {
  return (
    <BaseIcon className={className} verticalScale={0.83} debugBbox={debugBbox}>
      <svg
        className={styles.ScottyLabsIcon}
        viewBox="-50 -50 405 355"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter
          id="shadow"
          colorInterpolationFilters="sRGB"
          x="-40%"
          y="-40%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx={dropShadow?.dx}
            dy={dropShadow?.dy}
            stdDeviation={dropShadow?.stdDeviation}
            floodOpacity="0.5"
          />
        </filter>
        <g
          style={blendBackground ? { mixBlendMode: "overlay" } : undefined}
          filter={dropShadow ? "url(#shadow)" : undefined}
        >
          <path
            d="M15.491 254.169H0C0 228.449 4.79484 203.448 14.2001 180.067C17.8885 171.074 22.13 162.441 27.1093 153.987L29.1379 150.57L33.1951 150.21C41.125 149.671 53.6654 148.052 67.8655 143.016C88.5202 135.822 105.302 124.311 117.842 108.843C127.617 96.7923 134.44 82.9432 138.128 67.4754L121.531 10.6401L137.206 0.388184L141.632 3.62564C151.775 10.9998 162.471 18.0143 173.536 23.9496C180.544 27.9065 187.921 31.5037 195.298 34.7412C209.498 34.2016 223.882 32.7627 237.898 30.7843C255.418 28.2663 272.937 24.8489 290.088 20.3525L297.096 18.5539L299.493 25.3885C303.735 37.9786 305.579 50.9284 304.841 64.0581C304.288 76.4683 301.337 88.5189 296.358 99.8499L282.158 93.9146C286.4 84.2022 288.797 73.7704 289.35 63.1588C289.904 54.3457 288.982 45.5327 286.768 36.8995C271.462 40.6765 255.786 43.7341 240.111 45.8924C224.989 48.0507 209.498 49.3097 194.007 50.0291H192.163L190.503 49.3097C182.204 45.5327 173.905 41.5758 165.791 37.0793C157.308 32.403 148.825 27.1871 140.71 21.6115L154.357 67.1157L153.988 68.9143C149.747 87.4397 141.817 103.987 130.198 118.196C115.814 136.001 96.6345 148.951 73.2136 157.225C59.5667 161.901 47.3952 164.059 38.5432 164.959C34.8548 171.613 31.5353 178.628 28.5846 185.642C19.917 207.225 15.491 230.247 15.491 254.169Z"
            fill="white"
          />
        </g>
        <g
          style={blendBackground ? { mixBlendMode: "overlay" } : undefined}
          filter={dropShadow ? "url(#shadow)" : undefined}
        >
          <path
            d="M56.8006 254.169V251.111C56.8006 243.557 58.8292 237.802 62.702 234.205C68.7877 228.809 77.8242 229.169 78.3774 229.169H78.5618H189.765H190.134H190.687C191.241 229.169 198.617 228.629 203.965 233.485C208.576 237.622 210.973 244.456 210.973 254.169H226.464C226.464 239.96 222.223 229.169 214.108 221.974C204.334 213.521 192.347 213.881 189.396 214.06H79.4839C76.7176 213.881 62.8864 213.701 52.3746 222.873C44.9979 229.348 41.3096 238.881 41.3096 250.931V253.989H56.8006V254.169Z"
            fill="white"
          />
        </g>
        <g
          style={blendBackground ? { mixBlendMode: "overlay" } : undefined}
          filter={dropShadow ? "url(#shadow)" : undefined}
        >
          <path
            d="M239.742 146.613C250.07 181.146 254.864 217.297 254.311 254.168H269.802C270.355 215.858 265.192 178.268 254.68 142.296C252.467 134.922 250.07 127.548 247.303 120.354L280.498 133.663L286.4 119.634L240.664 101.289L228.677 115.138L230.337 119.274C233.841 128.267 236.976 137.44 239.742 146.613Z"
            fill="white"
          />
        </g>
      </svg>
    </BaseIcon>
  );
}
