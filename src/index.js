import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { ColorModeProvider } from "@theme-ui/color-modes";
import fetch from "cross-fetch";

import { ThemeProvider } from "@theme-ui/core";
import theme from "./internals/cinnaTheme";

import "./index.css";
import App from "./App";
require("@south-paw/typeface-minecraft");

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
