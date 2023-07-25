declare global {
	interface Window {
		Gradient: {
			new (): Gradient;
			initGradient: (id: String) => void;
		};
	}
}

window.Gradient = window.Gradient || {};

export {};
