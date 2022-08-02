import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import Image from "next/future/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

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

/**
 * Wraps an index based on `images`, with support for negative indexes
 */
function wrapIndex(index: number) {
  return (index + images.length) % images.length;
}

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

/**
 * A Carousel that cycles through pictures
 */
export default function Carousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [target, setTarget] = useState(0);

  const animate = (nextIndex: number) => {
    const timeline = anime.timeline({
      complete: () => {
        console.log("Complete");
        setIndex(nextIndex);
      },
    });

    timeline.add({
      targets: `.${styles.carouselWindowContainer}`,
      translateX: "-=20%",
      duration: 500,
      easing: "linear",
    });
  };

  useEffect(() => {
    if (target != index) {
      animate(target);
    }
  }, [target, index]);

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <div className={styles.carouselWindowRelative}>
        <div className={styles.carouselWindowContainer}>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[wrapIndex(target)]} />
          </div>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[wrapIndex(index)]} />
          </div>
          <div className={styles.focusWindow}>
            <CarouselImage {...images[wrapIndex(index + 1)]} />
          </div>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[wrapIndex(index + 2)]} />
          </div>
          <div className={styles.previewWindow}>
            <CarouselImage {...images[wrapIndex(target)]} />
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
              onClick={() => {
                setTarget(circleIndex);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
