/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";

import { Link } from "react-router-dom";

// import ThemeToggle from "../components/ThemeToggle";
import MinecraftContext from "../internals/MinecraftContext";

import emblem from "../assets/emblem.png";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as WikiIcon } from "../assets/wiki-icon.svg";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";

function NavBar() {
  const minecraftData = useContext(MinecraftContext);
  return (
    <div
      color="white"
      bg="darkGray"
      css={{
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "green orange",
        "::-webkit-scrollbar": {
          width: "1px",
        },
        "::-webkit-scrollbar-track": {
          background: (theme) => theme.colors.darkGrayAccent,
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) => theme.colors.primary,
        },
      }}
    >
      <div css={{ display: "grid", justifyItems: "center" }}>
        <div css={{ display: "flex" }}>
          <Link
            to="/"
            css={{
              mx: "auto",
              alignSelf: "center",
            }}
          >
            <img src={emblem} width="50px" alt="emblem" />
          </Link>
        </div>
        <div css={{ my: 1, width: "100%", bg: "gray", height: "1px" }}></div>
        <div css={{ display: "grid", gap: "16px" }}>
          <Link to={`/`}>
            <HomeIcon css={{ width: "32px" }} />
          </Link>

          <Link to={`/wiki`}>
            <WikiIcon css={{ width: "32px" }} />
          </Link>

          {/* <img src={playerHead} alt="Server Count" css={{ width: "32px" }} /> */}

          {minecraftData &&
            minecraftData.vanilla &&
            minecraftData.vanilla.onlinePlayers && (
              <div
                css={{
                  fontFamily: "Minecraft,monospace",
                  position: "relative",
                }}
              >
                <img
                  src={playerHead}
                  alt="Server Status"
                  css={{
                    width: "32px",
                  }}
                />
                <p
                  css={{
                    color: "white",
                    position: "absolute",
                    bottom: "-4px",
                    right: "4px",
                  }}
                >
                  {minecraftData.vanilla.onlinePlayers}
                </p>
              </div>
            )}
          {minecraftData &&
            minecraftData.modded &&
            minecraftData.modded.onlinePlayers && (
              <div
                css={{
                  fontFamily: "Minecraft,monospace",
                  position: "relative",
                }}
              >
                <img
                  src={computerHead}
                  alt="Server Status"
                  css={{
                    width: "32px",
                  }}
                />
                <p
                  css={{
                    color: "white",
                    position: "absolute",
                    bottom: "-4px",
                    right: "4px",
                  }}
                >
                  {minecraftData.modded.onlinePlayers}
                </p>
              </div>
            )}
          <span css={{ mt: 4 }}>
            {/* <ThemeToggle /> */}
            <p>O</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
