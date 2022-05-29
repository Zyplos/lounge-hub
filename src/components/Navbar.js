/** @jsxImportSource theme-ui */
import { Fragment, useContext } from "react";
import { Grid, Text } from "theme-ui";
import Link from "next/link";
import Image from "next/image";

import MinecraftContext from "../internals/MinecraftContext";

import emblem from "../assets/emblem.png";
import HomeIcon from "../assets/home-icon.png";
import WikiIcon from "../assets/wiki-icon.png";
import PlayerIcon from "../assets/player-icon.png";
import CompassIcon from "../assets/compass-icon.svg";
import BlockIcon from "../assets/block-icon.svg";
import YourspaceIcon from "../assets/yourspace-icon.svg";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";
import ThemeToggle from "./ThemeToggle";
import { mapUrlBase } from "../internals/Utils";

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

const NavMinecraftItem = ({ image, name, playerAmount }) => {
  return (
    <MinecraftContainer>
      <Image src={image} alt={name} width="32px" height="32px" />
      <MinecraftLabel>{playerAmount}</MinecraftLabel>
    </MinecraftContainer>
  );
};

const NavDivider = () => {
  return (
    <div
      sx={{
        margin: (theme) => `${theme.space[1]}px 0px`,
        width: "100%",
        background: (theme) => theme.colors.backgroundTertiary,
        height: "3px",
      }}
    ></div>
  );
};

const NavText = ({ children }) => {
  return (
    <Text
      sx={{
        display: ["inline-block", "none"],
        ml: 4,
        color: "white",
        fontSize: 4,
        verticalAlign: "text-bottom",
      }}
    >
      {children}
    </Text>
  );
};

function Navbar() {
  const minecraftData = useContext(MinecraftContext);

  const minecraftFragments = [];

  if (minecraftData) {
    const isVanillaOnline = minecraftData.vanilla.onlinePlayers >= 0;
    const isModdedOnline = minecraftData.modded.onlinePlayers >= 0;

    if (isVanillaOnline || isModdedOnline) {
      minecraftFragments.push(<NavDivider key={0} />);
    }

    if (isVanillaOnline) {
      minecraftFragments.push(<NavMinecraftItem key={1} image={playerHead} name="Vanilla Server Status" playerAmount={minecraftData.vanilla.onlinePlayers} />);
    }

    if (isModdedOnline) {
      minecraftFragments.push(<NavMinecraftItem key={2} image={computerHead} name="Modded Server Status" playerAmount={minecraftData.modded.onlinePlayers} />);
    }
  }

  return (
    <Fragment>
      <div
        sx={{
          backgroundColor: "backgroundSecondary",
          padding: 4,
          overflowY: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "#ff3e3e #242424",
          "::-webkit-scrollbar": {
            width: "1px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "backgroundTertiary",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "primary",
          },
        }}
      >
        <Grid gap={4} sx={{ justifyItems: ["flex-start", "center"] }}>
          <div sx={{ display: "flex" }}>
            <Link
              href="/"
              sx={{
                mx: "auto",
                alignSelf: "center",
              }}
            >
              <a>
                <Image src={emblem} alt="emblem" layout="fixed" width="48px" height="28px" />
              </a>
            </Link>
          </div>

          <NavDivider />

          <Link href={"/"}>
            <a>
              <Image src={HomeIcon} alt="Home Icon" width="32px" height="32px" />
              <NavText>Home</NavText>
            </a>
          </Link>

          <Link href={"/wiki"}>
            <a>
              <Image src={WikiIcon} alt="Wiki Icon" width="32px" height="32px" />
              <NavText>Wiki</NavText>
            </a>
          </Link>

          <Link href={"/mc"}>
            <a>
              <BlockIcon sx={{ width: "32px", height: "32px", fill: "white" }} />
              <NavText>Minecraft</NavText>
            </a>
          </Link>

          <Link href={"/mc/player"}>
            <a>
              <Image src={PlayerIcon} alt="Player Icon" width="32px" height="32px" />
              <NavText>Player Lookup</NavText>
            </a>
          </Link>

          <a href={mapUrlBase} target="_blank" rel="noreferrer">
            <a>
              <CompassIcon sx={{ width: "32px", height: "32px", fill: "white" }} />
              <NavText>Server Map</NavText>
            </a>
          </a>

          <ThemeToggle />

          {minecraftFragments}
        </Grid>
      </div>
    </Fragment>
  );
}

export default Navbar;
