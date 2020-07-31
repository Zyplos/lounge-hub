/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
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

import ThemeToggle from "../components/ThemeToggle";
import MinecraftContext from "../internals/MinecraftContext";

import emblem from "../assets/emblem.png";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as WikiIcon } from "../assets/wiki-icon.svg";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";

export default () => {
  const minecraftData = useContext(MinecraftContext);
  return (
    <Box
      color="white"
      bg="darkGray"
      sx={{
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
      <Grid sx={{ justifyItems: "center" }}>
        <Flex>
          <Link
            to="/"
            sx={{
              mx: "auto",
              alignSelf: "center",
            }}
          >
            <Image src={emblem} width="50px" />
          </Link>
        </Flex>
        <div sx={{ my: 1, width: "100%", bg: "gray", height: "1px" }}></div>
        <Grid>
          <Link to={`/`}>
            <HomeIcon sx={{ width: "32px" }} />
          </Link>

          <Link to={`/wiki`}>
            <WikiIcon sx={{ width: "32px" }} />
          </Link>

          {/* <img src={playerHead} alt="Server Count" sx={{ width: "32px" }} /> */}

          {minecraftData &&
            minecraftData.vanilla &&
            minecraftData.vanilla.players && (
              <div
                sx={{ fontFamily: "Minecraft,monospace", position: "relative" }}
              >
                <img
                  src={playerHead}
                  alt="Server Status"
                  sx={{
                    width: "32px",
                  }}
                />
                <Text
                  sx={{
                    color: "white",
                    position: "absolute",
                    bottom: "-4px",
                    right: "4px",
                  }}
                >
                  {minecraftData.vanilla.players.online}
                </Text>
              </div>
            )}
          {minecraftData &&
            minecraftData.modded &&
            minecraftData.modded.players && (
              <div
                sx={{ fontFamily: "Minecraft,monospace", position: "relative" }}
              >
                <img
                  src={computerHead}
                  alt="Server Status"
                  sx={{
                    width: "32px",
                  }}
                />
                <Text
                  sx={{
                    color: "white",
                    position: "absolute",
                    bottom: "-4px",
                    right: "4px",
                  }}
                >
                  {minecraftData.modded.players.online}
                </Text>
              </div>
            )}
          <span sx={{ mt: 4 }}>
            <ThemeToggle />
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};
