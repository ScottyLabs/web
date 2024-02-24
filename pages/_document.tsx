import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					strategy="beforeInteractive"
					src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"
				/>
				<Script id="gradient-loader" strategy="afterInteractive">
					window.Gradient = Gradient;
				</Script>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
				</Script>
			</body>
		</Html>
	);
}
