import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/style.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


type MyAppPropTypes = {
  Component: React.ComponentType,
  emotionCache: object,
  pageProps: object,
};

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppPropTypes) => {

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Zip Data</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

