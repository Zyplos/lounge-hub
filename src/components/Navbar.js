/** @jsxImportSource @theme-ui/core */
import React, { useContext } from "react";
import { jsx } from "@theme-ui/core";
import {
  Box,
  Grid,
  Flex,
  Image,
  Heading,
  Avatar,
  Divider,
  Text,
} from "@theme-ui/components";
import { Link } from "react-router-dom";

// import ThemeToggle from "../components/ThemeToggle";
import MinecraftContext from "../internals/MinecraftContext";

import emblem from "../assets/emblem.png";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as WikiIcon } from "../assets/wiki-icon.svg";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";

const MinecraftContainer = ({ ...props }) => (
  <div
    {...props}
    sx={{
      fontFamily: "Minecraft, monospace",
      position: "relative",
    }}
  />
);

const MinecraftLabel = ({ ...props }) => (
  <div
    {...props}
    sx={{
      color: "white",
      position: "absolute",
      bottom: "-3px",
      right: "-3px",
    }}
  />
);

function Navbar() {
  const minecraftData = useContext(MinecraftContext);
  return (
    <div
      sx={{
        backgroundColor: (theme) => theme.colors.backgroundSecondary,
        padding: (theme) => theme.space[4],
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "green orange",
        "::-webkit-scrollbar": {
          width: "1px",
        },
        "::-webkit-scrollbar-track": {
          background: (theme) => theme.colors.backgroundTertiary,
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) => theme.colors.primary,
        },
      }}
    >
      <Grid gap={4} sx={{ justifyItems: "center" }}>
        <div sx={{ display: "flex" }}>
          <Link
            to="/"
            sx={{
              mx: "auto",
              alignSelf: "center",
            }}
          >
            <img src={emblem} width="48px" alt="emblem" />
          </Link>
        </div>
        <div
          sx={{
            margin: (theme) => `${theme.space[1]}px 0px`,
            width: "100%",
            background: (theme) => theme.colors.background,
            height: "3px",
          }}
        ></div>

        <Link to={`/`}>
          <HomeIcon sx={{ width: "32px" }} />
        </Link>

        <Link to={`/wiki`}>
          <WikiIcon sx={{ width: "32px" }} />
        </Link>

        {minecraftData && minecraftData.vanilla && (
          <MinecraftContainer>
            <img
              src={playerHead}
              alt="Server Status"
              sx={{
                width: "32px",
              }}
            />
            <MinecraftLabel>
              {minecraftData.vanilla.onlinePlayers}
            </MinecraftLabel>
          </MinecraftContainer>
        )}
        {minecraftData && minecraftData.modded && (
          <MinecraftContainer>
            <img
              src={computerHead}
              alt="Server Status"
              sx={{
                width: "32px",
              }}
            />
            <MinecraftLabel>
              {minecraftData.modded.onlinePlayers}
            </MinecraftLabel>
          </MinecraftContainer>
        )}
      </Grid>
    </div>
  );
}

export default Navbar;
