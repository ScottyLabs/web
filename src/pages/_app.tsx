import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle as faCircleHollow } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	library.add(faBars);
	library.add(faCircle);
	library.add(faCircleHollow);

	return (
		<ClerkProvider
			allowedRedirectOrigins={[
				'https://www.cmucourses.com',
				'https://cmucourses.com',
			]}
		>
			<Component suppressHydrationWarning {...pageProps} />
		</ClerkProvider>
	);
}

export default MyApp;
