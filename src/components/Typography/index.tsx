import clsx from 'clsx';
import styles from './index.module.scss';

export type TypographyVariant =
	| 'hero'
	| 'header'
	| 'subheader'
	| 'body'
	| 'subtitle'
	| 'button';

function Typography({
	variant = 'body',
	children,
	className,
	centered,
}: {
	variant?: TypographyVariant;
	children?: string;
	className?: String;
	centered?: boolean;
}) {
	return (
		<div
			className={clsx(
				className,
				styles[variant],
				centered ? styles.centered : null,
			)}
		>
			{children}
		</div>
	);
}

export default Typography;
