import clsx from 'clsx';
import wrapElement from '../../utils/wrapElement';
import Typography from '../Typography';
import styles from './index.module.scss';

interface Props {
	className?: string;
	title: string;
	description?: string;
	image?: JSX.Element;
	date?: string;
}

export default function Event({
	className,
	title,
	description,
	image,
	date,
}: Props) {
	return (
		<div className={clsx(styles.eventContainer, className)}>
			<div className={styles.eventDetails}>
				<Typography variant="subheader" className={styles.eventTitle}>
					{title}
				</Typography>
				<Typography variant="subheader" className={styles.eventDate}>
					{date}
				</Typography>
				<Typography variant="body" className={styles.description}>
					{description}
				</Typography>
			</div>
			<div className={styles.eventImageContainer}>
				{image != null
					? wrapElement(image as JSX.Element)({
							className: styles.eventImage,
					  })
					: null}
			</div>
		</div>
	);
}
