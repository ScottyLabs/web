import clsx from 'clsx';
import { useEffect } from 'react';
import isSafari from '../../utils/isSafari';
import styles from './index.module.scss';

interface GradientProps {
	className?: string;
	expanded?: boolean;
}

export interface SubGradientProps {
	className?: string;
}

function AnimatedGradient({ className }: SubGradientProps) {
	useEffect(() => {
		if (window?.Gradient != null) {
			const gradient = new window.Gradient();
			gradient.freqX = 14e-5;
			gradient.freqY = 29e-5;
			gradient.freqDelta = 1e-4;
			gradient.amp = 100;
			gradient.initGradient('#gradient-canvas');
		}
	}, []);

	return (
		<canvas
			className={clsx(styles.canvas, className)}
			id="gradient-canvas"
			data-transition-in
		/>
	);
}

const isSSR = () => typeof window === 'undefined';

// Wrapper component to handle client-side only rendering
function AnimatedGradientNoSSRWrapper(props: SubGradientProps) {
	// Only render the AnimatedGradient component on the client-side
	return !isSSR() ? <AnimatedGradient {...props} /> : null;
}

/**
 * Expanded gradient with a wave-masked bottom border.
 * Used in the home page with the hero icon
 */
function ExpandedGradient({ className }: SubGradientProps) {
	return (
		<div className={clsx(styles.gradientContainer, className)}>
			<AnimatedGradientNoSSRWrapper
				className={clsx(
					isSafari() ? styles.gradientSafari : styles.gradient,
				)}
			/>
			<svg width={0} height={0}>
				<defs>
					<clipPath
						id="gradientClipPath"
						clipPathUnits="objectBoundingBox"
					>
						<path
							className={styles.gradientPath}
							d="M0,0.8 C0.4,1 0.6,0.4 1,0.6 L1,0 L0,0 Z"
						/>
						<path
							className={styles.gradientPathSm}
							d="M0,0.8 C0.4,1 0.6,0.65 1,0.75 L1,0 L0,0 Z"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

/**
 * Collapsed static gradient
 * Used on non-home pages
 */
function CollapsedGradient({ className }: SubGradientProps) {
	return <div className={clsx(styles.staticGradient, className)} />;
}

/**
 * Gradient background for the navbar
 */
export default function Gradient({
	className,
	expanded = false,
}: GradientProps) {
	return expanded ? (
		<ExpandedGradient className={className} />
	) : (
		<CollapsedGradient className={className} />
	);
}
