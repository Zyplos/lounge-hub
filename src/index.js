/** @jsxImportSource theme-ui */
import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { ThemeProvider } from "theme-ui";
import fetch from "cross-fetch";
import { BrowserRouter } from "react-router-dom";

import theme from "./internals/cinnaTheme";

import App from "./App";
import "./index.css";

require("@south-paw/typeface-minecraft");

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
