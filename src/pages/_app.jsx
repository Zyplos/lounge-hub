import { ThemeProvider } from "theme-ui";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

import { theme } from "../internals/theme";
import { MinecraftDataProvider } from "../internals/MinecraftContext";
import fetcher from "../internals/fetcher";

import "normalize.css";
import "./app.css";
// import { AppProps } from "next/app";
require("@south-paw/typeface-minecraft");

function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <MinecraftDataProvider>
          <SessionProvider refetchInterval={0} session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </MinecraftDataProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default App;
