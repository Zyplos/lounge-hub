/** @jsxImportSource @theme-ui/core */
import { Grid, Heading, Spinner, Text } from "@theme-ui/components";
import { useParams } from "react-router";
import useSWR from "swr";
import FullBox from "../../components/FullBox";
import MinecraftSkin from "react-minecraft-skin-viewer";
import PortraitTest from "../../assets/portrait.png";
import emblem from "../../assets/community/emblem.png";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/community-icon.svg";

function Player() {
  const { uuid } = useParams();
  const { data: playerData, playerError } = useSWR(
    `/api/minecraft/player?uuid=${uuid}`
  );
  const { data: chunkData, chunkError } = useSWR(
    `/api/minecraft/chunkByUUID?uuid=${uuid}`
  );
  if (playerError) {
    return (
      <FullBox>
        <Text variant="fullbox">Error getting player data.</Text>
        <pre>{JSON.stringify(playerError, false, 1)}</pre>
      </FullBox>
    );
  }
  if (chunkError) {
    return (
      <FullBox>
        <Text variant="fullbox">Error getting chunk data.</Text>
        <pre>{JSON.stringify(chunkError, false, 1)}</pre>
      </FullBox>
    );
  }
  if (!playerData) {
    return (
      <FullBox>
        <Spinner title="Loading Player Data" size={200} />
      </FullBox>
    );
  }

  const player = playerData.data[0];
  const joinDate = new Date(player.joined);
  //   width: 180,
  //   height: 320,
  // https://github.com/liziyi0914/react-minecraft-skin-viewer/blob/master/src/index.js
  return (
    <div>
      <header
        sx={{
          height: "350px",
          backgroundColor: "primary",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={PortraitTest}
          alt={`${player.name}'s portrait`}
          sx={{ height: "820px", alignSelf: "flex-start" }}
        ></img>
        <Grid
          sx={{
            gap: 3,
          }}
        >
          <Heading as="h1" variant="display">
            Zyplos
          </Heading>
          <Text sx={{ fontSize: 4 }}>
            <CommunityIcon
              sx={{
                height: (theme) => theme.fontSizes[4],
                width: (theme) => theme.fontSizes[4],
                fill: "white",
                verticalAlign: "top",
              }}
            />{" "}
            the lounge
          </Text>
          <Text sx={{ fontSize: 4 }}>
            <CalendarIcon
              sx={{
                height: (theme) => theme.fontSizes[4],
                width: (theme) => theme.fontSizes[4],
                fill: "white",
                verticalAlign: "top",
              }}
            />{" "}
            Joined on {joinDate.toDateString()}
          </Text>
        </Grid>
        <img src={emblem} alt="emblem" sx={{ height: "100px" }} />
      </header>

      <pre>{JSON.stringify(player, false, 1)}</pre>
      <pre>{JSON.stringify(chunkData, false, 1)}</pre>
    </div>
  );
}

export default Player;
