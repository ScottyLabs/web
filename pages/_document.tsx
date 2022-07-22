import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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
          {"window.Gradient = Gradient;"}
        </Script>
      </body>
    </Html>
  );
}
