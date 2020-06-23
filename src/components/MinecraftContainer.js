/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { useColorMode } from "@theme-ui/color-modes";

function MinecraftContainer(props) {
  const [colorMode] = useColorMode();

  return (
    <div
      sx={{
        backgroundColor: colorMode === "dark" ? "#252525" : "#c6c6c6",

        color: colorMode === "dark" ? "#fff" : "#373737",
        p: [2, 4],
        boxShadow:
          colorMode === "dark"
            ? "-6px -6px 0px 0px #1b1b1b inset, 6px 6px 0px 0px #585858 inset"
            : "-6px -6px 0px 0px #555555 inset, 6px 6px 0px 0px #fff inset",

        border: "4px solid #000",
        fontFamily: "Minecraft, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default MinecraftContainer;
