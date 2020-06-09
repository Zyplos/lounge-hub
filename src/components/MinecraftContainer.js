/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";

function MinecraftContainer(props) {
  return (
    <div
      sx={{
        backgroundColor: "#c6c6c6",
        color: "#373737",
        p: 4,
        boxShadow:
          "-6px -6px 0px 0px #555555 inset, 6px 6px 0px 0px #fff inset",
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
