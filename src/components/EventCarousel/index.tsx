import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typography from '../Typography';
import styles from './index.module.scss';

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
		src: '/events/nova.png',
		label: 'NOVA',
		width: 2266,
		height: 1248,
	},
	{
		src: '/events/tartanhacks.png',
		label: 'TartanHacks',
		width: 789,
		height: 444,
	},
	{
		src: '/events/scottyspark.png',
		label: 'ScottySpark',
		width: 1640,
		height: 624,
	},
];

/**
 * A single image/slide on the carousel, with a label on hover
 */
function CarouselImage({ src, width, height, label }: CarouselImageProps) {
	return (
		<div className={styles.carouselImageContainer}>
			<Image
				priority
				key={label}
				src={src}
				alt={label}
				width={width}
				height={height}
				className={styles.carouselImage}
			/>
			<div className={styles.carouselImageLabel}>
				<Typography variant="header">{label}</Typography>
			</div>
		</div>
	);
}

/**
 * Swipeable carousel of events on the home page
 */
export default function EventCarousel({ className }: Props) {
	const [index, setIndex] = useState(1);

	return (
		<div className={clsx(styles.carouselContainer, className)}>
			<Carousel
				selectedItem={index}
				centerMode
				swipeable
				emulateTouch
				showThumbs={false}
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				centerSlidePercentage={60}
				onChange={(newIndex) => setIndex(newIndex)}
			>
				{images.map((imageProps, imageIndex) => (
					<CarouselImage key={imageIndex} {...imageProps} />
				))}
			</Carousel>
			<div className={styles.navigator}>
				{images.map((_, circleIndex) => {
					const focused = circleIndex === index;
					const focusClass = focused
						? styles.navCircleFocused
						: styles.navCircleUnfocused;

					return (
						<FontAwesomeIcon
							key={circleIndex}
							icon={faCircle}
							className={clsx(styles.navCircle, focusClass)}
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
