/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { ThemeProvider, Global, css } from "@emotion/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import theme from "./internals/cinnamonTheme";
require("@south-paw/typeface-minecraft");

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          color: ${theme.colors.text};
          background: ${theme.colors.background};
          font-family: ${theme.fonts.body};
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: ${theme.colors.primary};
        }
      `}
    />
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
