import styles from "./index.module.scss";
import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface CarouselImageProps {
  src: string;
  label: string;
  width: number;
  height: number;
}

const images: CarouselImageProps[] = [
  {
    src: "/events/crash-course.png",
    label: "Crash Course",
    width: 1920,
    height: 1005,
  },
  {
    src: "/events/tartanhacks.png",
    label: "TartanHacks",
    width: 789,
    height: 444,
  },
  {
    src: "/events/wdw.png",
    label: "Web Dev Weekend",
    width: 1640,
    height: 624,
  },
];

function CarouselImage({ src, width, height, label }: CarouselImageProps) {
  return (
    <Image
      key={label}
      src={src}
      alt={label}
      width={width}
      height={height}
      className={styles.carouselImage}
    />
  );
}

export default function Carousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <div className={styles.carouselWindowRelative}>
        <div className={styles.carouselWindowContainer}>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[index % images.length]} />
          </div>
          <div className={styles.focusWindow}>
            <CarouselImage {...images[(index + 1) % images.length]} />
          </div>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[(index + 2) % images.length]} />
          </div>
        </div>
      </div>
      <div className={styles.navigator}>
        {images.map((_, circleIndex) => {
          const focused = circleIndex == index;
          const focusClass = focused
            ? styles.navCircleFocused
            : styles.navCircleUnfocused;

          return (
            <FontAwesomeIcon
              key={circleIndex}
              icon={faCircle}
              className={`${styles.navCircle} ${focusClass}`}
              onClick={() => setIndex(circleIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}
