import BaseLayout from 'layouts/BaseLayout';
import styles from 'styles/Sponsors.module.scss';

export default function Sponsors() {
	const sponsorPacketURL = 'Sponsorship\ Packet\ 25-26.pdf';

	return (
		<BaseLayout collapsedNavBar>
			<div className={styles.pageContent}>
				<div className={styles.sponsorPacketContainer}>
					<object
						data={sponsorPacketURL}
						type="application/pdf"
						className={styles.sponsorPacket}
					>
						<p>
							You don&apos;t have a PDF viewer for this browser.
							You can{' '}
							<a href={sponsorPacketURL}>
								click here to view the sponsorship packet.
							</a>
						</p>
					</object>
				</div>
			</div>
		</BaseLayout>
	);
}
