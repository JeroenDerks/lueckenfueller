import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      {process.env.NODE_ENV && process.env.NODE_ENV !== "development" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-FN6M1RCX9Y`}
          strategy="afterInteractive"
        />
      )}
      {process.env.NODE_ENV && process.env.NODE_ENV !== "development" && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FN6M1RCX9Y');
            `}
        </Script>
      )}

      <body style={{ margin: 0, boxSizing: "border-box" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
