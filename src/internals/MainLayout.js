/** @jsxImportSource @theme-ui/core */

import Navbar from "../components/Navbar";

function MainLayout(props) {
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
          p: 4,
        }}
      >
        {props.children}
      </article>
    </div>
  );
}

export default MainLayout;
