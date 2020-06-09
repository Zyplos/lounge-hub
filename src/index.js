import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { ColorModeProvider } from "@theme-ui/color-modes";
import fetch from "node-fetch";

import ContactThemeProvider from "./internals/ContactThemeProvider";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
require("@south-paw/typeface-minecraft");

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <ContactThemeProvider>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ContactThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
