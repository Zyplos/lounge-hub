/** @jsxImportSource theme-ui */

import { Text } from "theme-ui";
import Navbar from "../components/Navbar";

function MainLayout({ noPadding, ...props }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        maxHeight: "100vh",
        height: "100vh",
        position: "relative",
      }}
      id="App"
    >
      <Text
        variant="muted"
        sx={{
          position: "absolute",
          bottom: "25px",
          right: "35px",
          zIndex: 100,
        }}
      >
        Still in development
      </Text>
      <section
        sx={{
          display: ["none", "flex"],
          // "& > div": {
          //   p: 4,
          // },
        }}
      >
        <Navbar />
      </section>
      <article
        sx={{
          flexGrow: "1",
          p: noPadding ? 0 : 4,
          pb: noPadding ? 0 : [4, 6],
          overflowY: "auto",
        }}
      >
        {props.children}
      </article>
    </div>
  );
}

export default MainLayout;
