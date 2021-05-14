/** @jsxImportSource @theme-ui/core */

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
      }}
      id="App"
    >
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
          overflowY: "scroll",
        }}
      >
        {props.children}
      </article>
    </div>
  );
}

export default MainLayout;
