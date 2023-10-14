import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
};

export default appWithTranslation(App);
