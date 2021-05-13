/** @jsxImportSource @theme-ui/core */
import { useContext } from "react";
import { Grid } from "@theme-ui/components";
import { Link } from "react-router-dom";

import MinecraftContext from "../internals/MinecraftContext";

import emblem from "../assets/emblem.png";
import HomeIcon from "../assets/home-icon.png";
import WikiIcon from "../assets/wiki-icon.png";
import PlayerIcon from "../assets/player-icon.png";
import playerHead from "../assets/head.png";
import computerHead from "../assets/computer.png";
import ThemeToggle from "./ThemeToggle";

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
      <img
        src={image}
        alt={name}
        sx={{
          width: "32px",
        }}
      />
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

function Navbar() {
  const minecraftData = useContext(MinecraftContext);
  return (
    <div
      sx={{
        backgroundColor: "backgroundSecondary",
        padding: 4,
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "green orange",
        "::-webkit-scrollbar": {
          width: "1px",
        },
        "::-webkit-scrollbar-track": {
          background: "backgroundTertiary",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "primary",
        },
      }}
    >
      <div
        id="nav-toggle"
        sx={{
          position: "absolute",
          bottom: 30,
          right: 30,
          fontSize: 5,
          padding: 3,
          backgroundColor: "cardBg",
          display: "none",
        }}
      >
        ≡
      </div>
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

        <NavDivider />

        <Link to={`/`}>
          <img src={HomeIcon} alt="Home Icon" sx={{ width: "32px" }} />
        </Link>

        <Link to={`/wiki`}>
          <img src={WikiIcon} alt="Wiki Icon" sx={{ width: "32px" }} />
        </Link>

        {/* <Link to={`/mc/player`}>
          <img src={PlayerIcon} alt="Player Icon" sx={{ width: "32px" }} />
        </Link> */}

        <ThemeToggle />

        {minecraftData &&
          (minecraftData.vanilla.players || minecraftData.modded.players) && (
            <NavDivider />
          )}

        {minecraftData &&
          minecraftData.vanilla &&
          minecraftData.vanilla.players && (
            <NavMinecraftItem
              image={playerHead}
              name="Vanilla Server Status"
              playerAmount={minecraftData.vanilla.players.online}
            />
          )}
        {minecraftData &&
          minecraftData.modded &&
          minecraftData.modded.players && (
            <NavMinecraftItem
              image={computerHead}
              name="Modded Server Status"
              playerAmount={minecraftData.modded.players.online}
            />
          )}
      </Grid>
    </div>
  );
}

export default Navbar;
