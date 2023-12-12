/** @jsxImportSource theme-ui */
import { Box, Button, Grid, Heading, Text } from "theme-ui";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import CalendarIcon from "../../../assets/calendar-icon.svg";
import CommunityIcon from "../../../assets/community-icon.svg";
import DimensionIcon from "../../../assets/dimension-icon.svg";
import BaseIcon from "../../../assets/base-icon.svg";
import { useEffect, useState } from "react";
import {
  CommunityIdMap,
  CommunityColorMap,
  DimensionColorMap,
  DimensionInternalNameMap,
  mapUrlBase,
  findChunkCenter,
  prettyPrintDate,
  prettyPrintDateAndTime,
} from "../../../internals/Utils";
import ErrorFullBox from "../../../components/ErrorFullBox";
import LoadingFullBox from "../../../components/LoadingFullBox";
import MainLayout from "../../../internals/MainLayout";

const ChunkCard = ({ x, z, y, dimension, claimed_on, isHome }) => {
  return (
    <div
      sx={{
        bg: "cardBg",
        p: 3,
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
        color: (theme) => theme.colors.text,
        "&:hover": {
          bg: "cardBgSecondary",
        },
      }}
    >
      <div
        sx={{
          mr: 3,
        }}
      >
        {isHome ? (
          <BaseIcon fill={DimensionColorMap[dimension]} sx={{ width: "64px", height: "64px" }} />
        ) : (
          <DimensionIcon fill={DimensionColorMap[dimension]} sx={{ width: "64px", height: "64px" }} />
        )}
      </div>
      <Grid>
        <Text sx={{ variant: "text.heading", fontSize: 3 }}>{isHome ? "Home" : `(${x}, ${z})`}</Text>
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
  const router = useRouter();

  const { data: playerData, error: playerError } = useSWR(`/api/minecraft/player?name=${router.query.name}`);
  const { data: chunkData, error: chunkError } = useSWR(() => "/api/minecraft/chunkByUUID?uuid=" + playerData.data[0].player_id);
  const [currentMapUrl, setMapUrl] = useState(mapUrlBase + "/#world:-7:58:214:30:0:0:0:0:perspective");

  if (!router.query.name) {
    return (
      <MainLayout>
        <ErrorFullBox message="No username provided." />
      </MainLayout>
    );
  }

  if (playerError) {
    return (
      <MainLayout>
        <ErrorFullBox header={playerError.status} text="Error getting player data." />
      </MainLayout>
    );
  }
  if (chunkError) {
    return (
      <MainLayout>
        <ErrorFullBox header={chunkError.status} text="Error getting chunk data." />
      </MainLayout>
    );
  }

  if (!playerData) {
    return <LoadingFullBox text="Grabbing player data..." />;
  }

  if (playerData.data.length === 0) {
    return (
      <MainLayout>
        <ErrorFullBox header={404} text="Player not found." />
      </MainLayout>
    );
  }

  if (!chunkData) {
    return <LoadingFullBox text="Loading chunk claims..." />;
  }

  function updateMapFrame(x, z, dimension) {
    const newCoords = findChunkCenter(x, z);
    setMapUrl(`${mapUrlBase}/#${dimension}:${newCoords.x}:${newCoords.y}:${newCoords.z}:30:0:0:0:0:perspective`);
  }
  function updateMapFrameHome(x, y, z, dimension) {
    setMapUrl(`${mapUrlBase}/#${dimension}:${x}:${y + 2}:${z}:5:0:1.4:0:0:free`);
  }

  const player = playerData.data[0];
  const joinDate = new Date(player.joined);

  if (!player.community_id) {
    player.community_id = 99;
  }

  const communityName = CommunityIdMap[player.community_id];
  const communityColor = CommunityColorMap[player.community_id];

  return (
    <MainLayout noPadding>
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
          <Box color="white" bg={communityColor} sx={{ position: "sticky", top: 0 }}>
            <div
              sx={{
                height: "125px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div sx={{ alignSelf: "flex-start", mr: 2, position: "relative" }}>
                <Image
                  src={`https://visage.surgeplay.com/full/304/${player.player_id}`}
                  alt={`${player.name}'s portrait`}
                  width="198px"
                  height="320px"
                  layout="fixed"
                  priority
                />
              </div>

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
                <div
                  sx={{
                    position: "absolute",
                    width: "45px",
                    opacity: "75%",
                    top: "15px",
                    right: "15px",
                    zIndex: -1,
                  }}
                >
                  <Image src={`/static-assets/community/${player.community_id}.png`} alt="community watermark" width="45px" height="45px" />
                </div>
              </Grid>
            </div>
          </Box>
          <Grid p={4}>
            {player.home_x && player.home_y && player.home_z && player.home_dimension && (
              <Button
                onClick={() => updateMapFrameHome(player.home_x, player.home_y, player.home_z, DimensionInternalNameMap[player.home_dimension])}
                p={0}
                bg="transparent"
                sx={{ textAlign: "left", cursor: "pointer" }}
              >
                <ChunkCard x={player.home_x} y={player.home_y} z={player.home_z} dimension={player.home_dimension} isHome />
              </Button>
            )}
            {chunkData.data.length === 0 && <Text>This player has not claimed any chunks yet.</Text>}
            {chunkData.data.map((chunk, index) => {
              return (
                <Button
                  onClick={() => updateMapFrame(chunk.x, chunk.z, DimensionInternalNameMap[chunk.dimension])}
                  key={index}
                  p={0}
                  bg="transparent"
                  sx={{ textAlign: "left", cursor: "pointer" }}
                >
                  <ChunkCard x={chunk.x} z={chunk.z} dimension={chunk.dimension} claimed_on={new Date(chunk.claimed_on)} />
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
    </MainLayout>
  );
}

export default Player;
