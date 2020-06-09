import React from "react";
import useSWR from "swr";
import { merge, ThemeProvider } from "@theme-ui/core";

import theme from "../styles/defaultTheme";

export default (props) => {
  const { data: userData, error } = useSWR(
    `${process.env.REACT_APP_AUTHBASE_ROOT}/profile`
  );

  if (!userData || !userData.user || !userData.user.cbColor || error)
    return (
      <ThemeProvider {...props} theme={theme}>
        {props.children}
      </ThemeProvider>
    );

  // eslint-disable-next-line no-unused-vars
  let customTheme = userData.user.cbColor
    ? merge(theme, {
        colors: {
          primary: "#0094ff" || userData.user.cbColor,
        },
      })
    : null;

  return (
    <ThemeProvider {...props} theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};
