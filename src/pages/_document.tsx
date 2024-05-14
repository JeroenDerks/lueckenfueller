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

      <body style={{ margin: 0, boxSizing: "border-box" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
