/** @jsxImportSource theme-ui */

import { useState } from "react";
import { Close } from "theme-ui";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";
import Navbar from "../components/Navbar";

function MainLayout({ noPadding, ...props }) {
  const [isOpen, setOpen] = useState(false);

  function showNavbar() {
    setOpen(!isOpen);
    console.log("ouguh");
  }

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
      <div
        id="nav-toggle"
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          padding: 3,
          backgroundColor: "backgroundSecondary",
          display: ["block", "none"],
          zIndex: 100,
        }}
        onClick={showNavbar}
      >
        {isOpen ? (
          <Close color="white" />
        ) : (
          <HamburgerIcon sx={{ display: "block", fill: "white" }} />
        )}
      </div>
      <section
        sx={{
          display: [isOpen ? "flex" : "none", "flex"],
          width: [isOpen ? "100%" : "auto", "auto"],
          ...(isOpen && {
            "& > div": {
              width: "100%",
            },
          }),
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
          display: [isOpen ? "none" : "block", "block"],
        }}
      >
        {props.children}
      </article>
    </div>
  );
}

export default MainLayout;
