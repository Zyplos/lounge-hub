/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import useSWR, { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

import theme from "../internals/cinnaTheme";
import MinecraftContext from "../internals/MinecraftContext";
import fetcher from "../internals/fetcher";

import "normalize.css";
import "./app.css";
require("@south-paw/typeface-minecraft");

function App({ Component, pageProps }) {
  const { data: minecraftData, error: minecraftError } = useSWR("/api/minecraft/status-bugfix", {
    refreshInterval: 0,
  });

  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <MinecraftContext.Provider value={minecraftError || minecraftData}>
          <SessionProvider
            options={{
              staleTime: 0,
              refetchInterval: 0,
            }}
            session={pageProps.session}
          >
            <Component {...pageProps} />
          </SessionProvider>
        </MinecraftContext.Provider>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default App;
