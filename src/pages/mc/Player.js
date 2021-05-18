/** @jsxImportSource @theme-ui/core */
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Text,
} from "@theme-ui/components";
import { useParams } from "react-router";
import useSWR from "swr";
import FullBox from "../../components/FullBox";
import PortraitTest from "../../assets/portrait.png";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/community-icon.svg";
import { ReactComponent as DimensionIcon } from "../../assets/dimension-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { Link } from "react-router-dom";
import { Children, useEffect, useState } from "react";
import {
  CommunityIdMap,
  CommunityColorMap,
  DimensionColorMap,
  DimensionNameMap,
  DimensionInternalNameMap,
} from "../../internals/Utils";

const mapUrlBase = "https://mc.lounge.haus";

const ChunkCard = ({ x, z, y, dimension, claimed_on }) => {
  const isHome = dimension === "home";
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
          <HomeIcon fill="white" />
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
          // /tp Zyplos 474.43 63.00 396.33 321.99 -14.24
          // 474:63:396:50:321.99:-14.24
          // http://localhost:8100/#world:474:59:396:5:321:1.4:0:0:free
          <Text>
            Claimed{" "}
            {claimed_on.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        )}
      </Grid>
    </div>
  );
};

function findChunkCenter(cx, cz) {
  const x = cx * 16 + 8;
  const z = cz * 16 + 8;
  return { x, y: 90, z };
}

function Player() {
  const { uuid } = useParams();

  const { data: playerData, playerError } = useSWR(
    `/api/minecraft/player?uuid=${uuid}`
  );
  const { data: chunkData, chunkError } = useSWR(
    `/api/minecraft/chunkByUUID?uuid=${uuid}`
  );
  const [currentMapUrl, setMapUrl] = useState(
    mapUrlBase + "/#world:-7:58:214:30:0:0:0:0:perspective"
  );
  console.log("CHUNKDATA", chunkData, "PLAYERDATA", playerData);

  if (!uuid) {
    return (
      <h1>
        no uuid <Link to="player/3dd5724c1bf54749b6332c04f3962b2e">CID 1</Link>
        <Link to="player/b24ec2cb47b74337a3713be527ac71ec">CID 2</Link>
        <Link to="player/3709f893520544b6996bd583e1966716">CID 3</Link>
      </h1>
    );
  }
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
  if (!chunkData) {
    return (
      <FullBox>
        <Spinner title="Loading Chunk Data" size={200} />
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
      `${mapUrlBase}/#${dimension}:${x}:${y}:${z}:5:0:1.4:0:0:perspective`
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
              src={`https://visage.surgeplay.com/full/320/${player.player_id}`}
              alt={`${player.name}'s portrait`}
              sx={{ height: "320px", alignSelf: "flex-start", mr: 2 }}
            ></img>
            <Grid
              sx={{
                gap: 2,
              }}
            >
              <Heading as="h1" sx={{ fontSize: 4 }}>
                {player.name}
              </Heading>
              <Text>
                <CommunityIcon
                  sx={{
                    height: (theme) => theme.fontSizes[3],
                    width: (theme) => theme.fontSizes[3],
                    fill: "white",
                    verticalAlign: "bottom",
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
                    verticalAlign: "bottom",
                    mr: 2,
                  }}
                />
                Joined on {joinDate.toLocaleDateString("en-US")}
              </Text>

              <img
                src={`/static-assets/community/${player.community_id}.png`}
                alt="community watermark"
                sx={{
                  position: "absolute",
                  width: "45px",
                  opacity: "50%",
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
                  dimension="home"
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
                  claimed_on={new Date()}
                />
              </Button>
            );
          })}
        </Grid>
      </div>
      <iframe
        sx={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        src={currentMapUrl}
        title={`${player.name}'s Base`}
      ></iframe>
    </Grid>
  );
}

export default Player;
