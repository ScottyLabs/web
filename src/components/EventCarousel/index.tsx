import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.scss";

interface Props {
  className?: string;
}

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
    src: "/events/wdw.jpg",
    label: "Web Dev Weekend",
    width: 1640,
    height: 624,
  },
];

function CarouselImage({ src, width, height, label }: CarouselImageProps) {
  return (
    <Image
      priority={true}
      key={label}
      src={src}
      alt={label}
      width={width}
      height={height}
      className={styles.carouselImage}
    />
  );
}

export default function EventCarousel({ className = "" }: Props) {
  const [index, setIndex] = useState(1);

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <Carousel
        selectedItem={index}
        centerMode={true}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={60}
        onChange={(index) => setIndex(index)}
      >
        {images.map((imageProps, index) => (
          <CarouselImage key={index} {...imageProps} />
        ))}
      </Carousel>
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
                setIndex(circleIndex);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
