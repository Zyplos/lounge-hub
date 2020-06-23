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
import useSWR from "swr";
import { Link, NavLink } from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";
import AuthContext from "../internals/AuthContext";
import MinecraftContext from "../internals/MinecraftContext";
import authFetcher from "../internals/authFetcher";

import emblem from "../assets/emblem.png";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as WikiIcon } from "../assets/wiki-icon.svg";
import playerHead from "../assets/head.png";
import MinecraftSlot from "./MinecraftSlot";

export default () => {
  const userData = useContext(AuthContext);
  const minecraftData = useContext(MinecraftContext);
  const { data: asData, error } = useSWR(
    `${process.env.REACT_APP_AUTHBASE_ROOT}/profile`,
    authFetcher
  );
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
        <Flex
          sx={{
            flexDirection: "row",
            alignItems: "center",
            bg: (theme) => theme.colors.primary,
            p: 3,
            display: "none",
          }}
        >
          {userData && userData.user && (
            <React.Fragment>
              <Avatar
                src={`https://cdn.discordapp.com/avatars/${userData.user.id}/${
                  userData.user.avatar
                }.${
                  userData.user.avatar.startsWith("a_") ? "gif" : "png"
                }?size=1024`}
                alt="Discord Avatar"
                sx={{ mr: 2, minWidth: "70px" }}
              />

              <Heading
                sx={{
                  mx: "auto",
                  color: "white",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {userData.user.friendlyName || userData.user.username}
              </Heading>
            </React.Fragment>
          )}
          {!userData && error && (
            <Text>
              Authspace
              <br />
              Offline
            </Text>
          )}
          {userData && !userData.authenticated && <Text>sign in</Text>}
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

          {minecraftData.vanilla && minecraftData.vanilla.players && (
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
          <span sx={{ mt: 4 }}>
            <ThemeToggle />
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};
