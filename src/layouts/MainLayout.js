/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex } from "@theme-ui/components";

import Navbar from "../components/Navbar";

function Wiki(props) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        minHeight: "100vh",
      }}
      id="App"
    >
      <section
        sx={{
          display: ["none", "flex"],
          width: "100px",
          minWidth: "100px",
          "& > div": {
            p: 4,
          },
        }}
      >
        <Navbar />
      </section>
      <article
        sx={{
          flexGrow: "1",
          p: 4,
        }}
      >
        {props.children}
      </article>
      <div
        id="nav-toggle"
        sx={{
          position: "absolute",
          bottom: 30,
          right: 30,
          fontSize: 5,
          padding: 3,
          backgroundColor: "cardBg",
        }}
      >
        ≡
      </div>
    </div>
  );
}

export default Wiki;
