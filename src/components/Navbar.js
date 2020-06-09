/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { jsx } from "@theme-ui/core";
import {
  Link,
  Box,
  Grid,
  Flex,
  Image,
  Heading,
  Avatar,
  Divider,
} from "@theme-ui/components";

import ThemeToggle from "../components/ThemeToggle";
import AuthContext from "../internals/AuthContext";

import emblem from "../assets/emblem.png";
import mindspaceId from "../assets/mindspaceId.svg";

export default () => {
  const userData = useContext(AuthContext);
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
      <Grid>
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
          }}
        >
          {userData && (
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
        </Flex>
        <Divider sx={{ m: 0 }} />
        <Grid gap={0}>
          <section>
            <Heading as="h4">Section</Heading>

            <p sx={{ ml: 2 }}>
              <Link
                to={`/logs/finale`}
                sx={{
                  color: "white",
                }}
              >
                » Date
              </Link>
            </p>
          </section>
          <ThemeToggle />
        </Grid>
      </Grid>
    </Box>
  );
};
