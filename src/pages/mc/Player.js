/** @jsxImportSource @theme-ui/core */
import {
  Box,
  Button,
  Grid,
  Heading,
  Spinner,
  Text,
} from "@theme-ui/components";
import { useParams, Redirect } from "react-router";
import useSWR from "swr";
import FullBox from "../../components/FullBox";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/community-icon.svg";
import { ReactComponent as DimensionIcon } from "../../assets/dimension-icon.svg";
import { ReactComponent as BaseIcon } from "../../assets/base-icon.svg";
import { useState } from "react";
import {
  CommunityIdMap,
  CommunityColorMap,
  DimensionColorMap,
  DimensionInternalNameMap,
  mapUrlBase,
  findChunkCenter,
  prettyPrintDate,
  prettyPrintDateAndTime,
} from "../../internals/Utils";

const ChunkCard = ({ x, z, y, dimension, claimed_on, isHome }) => {
  return (
    <div
      sx={{
        bg: "cardBg",
        p: 3,
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          mr: 3,
        }}
      >
        {isHome ? (
          <BaseIcon fill={DimensionColorMap[dimension]} />
        ) : (
          <DimensionIcon fill={DimensionColorMap[dimension]} />
        )}
      </div>
      <Grid>
        <Text sx={{ variant: "text.heading", fontSize: 3 }}>
          {isHome ? "Home" : `(${x}, ${z})`}
        </Text>
        {isHome ? (
          <Text>
            Set at {x}, {y}, {z}
          </Text>
        ) : (
          <Text>Claimed {prettyPrintDateAndTime(claimed_on)}</Text>
        )}
      </Grid>
    </div>
  );
};

function Player() {
  const { name } = useParams();

  const { data: playerData, playerError } = useSWR(
    `/api/minecraft/player?name=${name}`
  );
  const { data: chunkData, chunkError } = useSWR(
    () => `/api/minecraft/chunkByUUID?uuid=` + playerData.data[0].player_id
  );
  const [currentMapUrl, setMapUrl] = useState(
    mapUrlBase + "/#world:-7:58:214:30:0:0:0:0:perspective"
  );
  console.log("CHUNKDATA", chunkData, "PLAYERDATA", playerData);

  if (playerError) {
    return (
      <FullBox useDims>
        <Text variant="fullbox">Error getting player data.</Text>
        <pre>{JSON.stringify(playerError, false, 1)}</pre>
      </FullBox>
    );
  }
  if (chunkError) {
    return (
      <FullBox useDims>
        <Text variant="fullbox">Error getting chunk data.</Text>
        <pre>{JSON.stringify(chunkError, false, 1)}</pre>
      </FullBox>
    );
  }
  if (!playerData) {
    return (
      <FullBox useDims>
        <Spinner title="Loading Player Data" size={200} />
        Grabbing player profile.
      </FullBox>
    );
  }

  // no player found, return to player lookup home
  if (playerData.data.length === 0) {
    return <Redirect to="/mc/player#notfound" />;
  }

  if (!chunkData) {
    return (
      <FullBox useDims>
        <Spinner title="Loading Chunk Data" size={200} /> Loading chunk claims.
      </FullBox>
    );
  }

  function updateMapFrame(x, z, dimension) {
    const newCoords = findChunkCenter(x, z);
    setMapUrl(
      `${mapUrlBase}/#${dimension}:${newCoords.x}:${newCoords.y}:${newCoords.z}:30:0:0:0:0:perspective`
    );
  }
  function updateMapFrameHome(x, y, z, dimension) {
    setMapUrl(
      `${mapUrlBase}/#${dimension}:${x}:${y + 4}:${z}:5:0:1.4:0:0:free`
    );
  }

  const player = playerData.data[0];
  const joinDate = new Date(player.joined);

  const communityName = CommunityIdMap[player.community_id];
  const communityColor = CommunityColorMap[player.community_id];

  return (
    <Grid
      sx={{
        gridTemplateColumns: "500px auto",
        maxHeight: "100vh",
        height: "100vh",
      }}
      gap={0}
    >
      <div
        sx={{
          overflowY: "auto",
          "::-webkit-scrollbar": {
            width: "5px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "backgroundSecondary",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
          },
        }}
      >
        <Box
          color="white"
          bg={communityColor}
          sx={{ position: "sticky", top: 0 }}
        >
          <div
            sx={{
              height: "125px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={`https://visage.surgeplay.com/full/304/${player.player_id}`}
              alt={`${player.name}'s portrait`}
              sx={{ height: "320px", alignSelf: "flex-start", mr: 2 }}
            ></img>
            <Grid gap={2}>
              <Heading as="h1" sx={{ fontSize: 4 }}>
                {player.name}
              </Heading>
              <Text>
                <CommunityIcon
                  sx={{
                    height: (theme) => theme.fontSizes[3],
                    width: (theme) => theme.fontSizes[3],
                    fill: "white",
                    verticalAlign: "text-bottom",
                    mr: 2,
                  }}
                />
                {communityName}
              </Text>
              <Text>
                <CalendarIcon
                  sx={{
                    height: (theme) => theme.fontSizes[3],
                    width: (theme) => theme.fontSizes[3],
                    fill: "white",
                    verticalAlign: "text-bottom",
                    mr: 2,
                  }}
                />
                Joined on {prettyPrintDate(joinDate)}
              </Text>

              <img
                src={`/static-assets/community/${player.community_id}.png`}
                alt="community watermark"
                sx={{
                  position: "absolute",
                  width: "45px",
                  opacity: "75%",
                  top: "25px",
                  right: "25px",
                  zIndex: -1,
                }}
              />
            </Grid>
          </div>
        </Box>
        <Grid p={4}>
          {player.home_x &&
            player.home_y &&
            player.home_z &&
            player.home_dimension && (
              <Button
                onClick={() =>
                  updateMapFrameHome(
                    player.home_x,
                    player.home_y,
                    player.home_z,
                    DimensionInternalNameMap[player.home_dimension]
                  )
                }
                p={0}
                bg="transparent"
                sx={{ textAlign: "left", cursor: "pointer" }}
              >
                <ChunkCard
                  x={player.home_x}
                  y={player.home_y}
                  z={player.home_z}
                  dimension={player.home_dimension}
                  isHome
                />
              </Button>
            )}
          {chunkData.data.length === 0 && (
            <Text>This player has not claimed any chunks yet.</Text>
          )}
          {chunkData.data.map((chunk, index) => {
            return (
              <Button
                onClick={() =>
                  updateMapFrame(
                    chunk.x,
                    chunk.z,
                    DimensionInternalNameMap[chunk.dimension]
                  )
                }
                key={index}
                p={0}
                bg="transparent"
                sx={{ textAlign: "left", cursor: "pointer" }}
              >
                <ChunkCard
                  x={chunk.x}
                  z={chunk.z}
                  dimension={chunk.dimension}
                  claimed_on={new Date(chunk.claimed_on)}
                />
              </Button>
            );
          })}
        </Grid>
      </div>
      <div>
        <iframe
          sx={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src={currentMapUrl}
          title={`${player.name}'s Base`}
        ></iframe>
      </div>
    </Grid>
  );
}

export default Player;
