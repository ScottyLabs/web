import clsx from 'clsx';
import Link from 'next/link';
import Typography from '../Typography';
import styles from './index.module.scss';

interface Props {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
}

export default function RoundButton({
	className,
	label,
	href,
	onClick,
}: Props) {
	return (
		<Link
			href={href ?? '#'}
			passHref
			target="_blank"
			className={styles.link}
		>
			<div
				className={clsx(styles.roundButton, className)}
				onClick={onClick}
			>
				<Typography variant="button" className={styles.buttonLabel}>
					{label}
				</Typography>
			</div>
		</Link>
	);
}
