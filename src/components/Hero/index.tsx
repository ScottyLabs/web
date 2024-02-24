import ScottyLabsIcon from '../../icons/ScottyLabsIcon';
import Typography from '../Typography';
import styles from './index.module.scss';

/**
 * Hero component containing the ScottyLabs icon
 * and the title
 */
function Hero() {
	return (
		<div className={styles.heroContainer}>
			<ScottyLabsIcon
				className={styles.heroImage}
				dropShadow={{ dx: 1, dy: 1, stdDeviation: 10 }}
			/>
			<Typography className={styles.heroTitle} variant="hero">
				ScottyLabs
			</Typography>
		</div>
	);
}

export default Hero;
