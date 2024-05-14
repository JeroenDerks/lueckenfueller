import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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

      <main>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
};

export default appWithTranslation(App);
