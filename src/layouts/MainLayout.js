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
    </div>
  );
}

export default Wiki;
