/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// import ThemeToggle from "../components/ThemeToggle";
import MinecraftContext from "../internals/MinecraftContext";
import Stack from "../components/system/Stack";

import emblem from "../assets/emblem.png";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as WikiIcon } from "../assets/wiki-icon.svg";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";

/*
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
                bottom: "-20px",
                right: "-4px",
              }}
            >
              {minecraftData.modded.onlinePlayers}
            </p>
          </div>
*/

const MinecraftContainer = styled.div`
  font-family: Minecraft, monospace;
  position: relative;
`;

const MinecraftLabel = styled.span`
  color: white;
  position: absolute;
  bottom: -3px;
  right: -3px;
`;

function NavBar() {
  const minecraftData = useContext(MinecraftContext);
  return (
    <div
      css={(theme) => ({
        backgroundColor: theme.colors.backgroundSecondary,
        padding: theme.space[4],
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
      })}
    >
      <Stack gap={4} css={{ justifyItems: "center" }}>
        <div css={{ display: "flex" }}>
          <Link
            to="/"
            css={{
              mx: "auto",
              alignSelf: "center",
            }}
          >
            <img src={emblem} width="48px" alt="emblem" />
          </Link>
        </div>
        <div
          css={(theme) => ({
            margin: `${theme.space[1]}px 0px`,
            width: "100%",
            background: theme.colors.background,
            height: "3px",
          })}
        ></div>

        <Link to={`/`}>
          <HomeIcon css={{ width: "32px" }} />
        </Link>

        <Link to={`/wiki`}>
          <WikiIcon css={{ width: "32px" }} />
        </Link>

        {minecraftData && minecraftData.vanilla && (
          <MinecraftContainer>
            <img
              src={playerHead}
              alt="Server Status"
              css={{
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
              css={{
                width: "32px",
              }}
            />
            <MinecraftLabel>
              {minecraftData.modded.onlinePlayers}
            </MinecraftLabel>
          </MinecraftContainer>
        )}
      </Stack>
    </div>
  );
}

export default NavBar;
