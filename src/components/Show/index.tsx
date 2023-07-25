import type { ReactNode } from 'react';

interface Props {
	when: boolean;
	children?: ReactNode;
}

/**
 * Convenience component for conditional rendering
 */
export default function Show({ when, children }: Props) {
	if (when) return <>{children}</>;
	return null;
}
