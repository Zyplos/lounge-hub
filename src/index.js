/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { ThemeProvider, Global, css } from "@emotion/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import cinnaTheme from "./internals/cinnamonTheme";
require("@south-paw/typeface-minecraft");

const lightTheme = {
  text: "#000",
  background: "#fff",
};

const darkTheme = {
  text: "#fff",
  background: "#000",
};

const theme = { ...{ primary: "#ff3e3e" }, ...darkTheme };

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
          color: ${theme.text};
          background: ${theme.background};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: ${theme.primary};
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
