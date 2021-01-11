/** @jsxImportSource @emotion/react */
// eslint-disable-next-line no-unused-vars
// import React from "react";
import { css, jsx } from "@emotion/react";
import NavBar from "../components/Navbar";
// import { jsx } from "@theme-ui/core";
// import { Heading, Grid, Flex } from "@theme-ui/components";

// import Navbar from "../components/Navbar";

function MainLayout(props) {
  console.log(props);
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        minHeight: "100vh",
      }}
      id="App"
    >
      <section
        css={(theme) => ({
          display: ["none", "flex"],

          // width: "100px",
          // minWidth: "100px",
          // "& > div": {
          //   padding: "16px",
          // },
        })}
      >
        <NavBar />
      </section>
      <article
        css={(theme) => ({
          flexGrow: "1",
          padding: theme.space[4],
          p: 4,
        })}
      >
        {props.children}
      </article>
      <div
        id="nav-toggle"
        css={{
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

export default MainLayout;
