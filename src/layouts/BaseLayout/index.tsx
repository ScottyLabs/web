import Head from 'next/head';
import type { ReactNode } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss';

interface Props {
	children?: ReactNode;
	collapsedNavBar?: boolean;
}

/**
 * The base layout which includes the ScottyLabs header,
 * a navbar, and a footer
 */
export default function BaseLayout({
	children,
	collapsedNavBar = true,
}: Props) {
	return (
		<>
			<Head>
				<title>ScottyLabs</title>
				<meta name="title" content="ScottyLabs" />
				<meta
					name="description"
					content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://scottylabs.org/" />
				<meta property="og:title" content="ScottyLabs" />
				<meta
					property="og:description"
					content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
				/>
				<meta property="og:image" content="/scottylabs-preview.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://scottylabs.org/"
				/>
				<meta property="twitter:title" content="ScottyLabs" />
				<meta
					property="twitter:description"
					content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
				/>
				<meta
					property="twitter:image"
					content="/scottylabs-preview.png"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className={styles.pageContainer}>
				<main>
					<Navbar collapsed={collapsedNavBar} />
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
}
