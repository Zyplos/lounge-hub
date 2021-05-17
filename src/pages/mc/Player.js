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
import emblem from "../../assets/community/emblem.png";
import peggrune from "../../assets/community/peggrune.png";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/community-icon.svg";
import { ReactComponent as DimensionIcon } from "../../assets/dimension-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const mapUrlBase =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8100"
    : "http://mc.lounge.haus:8100";

const ChunkCard = ({ x, z, dimension, claimed_on }) => {
  const dimensionName = "The Overworld";
  const dimensionColor = "#41BC49";
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
          backgroundColor: dimensionColor,
          borderRadius: "10px",
          p: 2,
          mr: 3,
        }}
      >
        {dimension === "home" ? (
          <HomeIcon fill="white" />
        ) : (
          <DimensionIcon fill="white" />
        )}
      </div>
      <Grid>
        <Text sx={{ variant: "text.heading", fontSize: 3 }}>
          ({x}, {z})
        </Text>
        <Text>Claimed on {claimed_on.toDateString()}</Text>
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
        no uuid{" "}
        <Link to="player/3dd5724c1bf54749b6332c04f3962b2e">test profile</Link>
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

  function updateMapFrame(x, z) {
    const newCoords = findChunkCenter(x, z);
    setMapUrl(
      `${mapUrlBase}/#world:${newCoords.x}:${newCoords.y}:${newCoords.z}:30:0:0:0:0:perspective`
    );
  }

  const player = playerData.data[0];
  const joinDate = new Date(player.joined);

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
          overflowY: "scroll",
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
        <Box color="white" bg="#ff3e3e" sx={{ position: "sticky", top: 0 }}>
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
              src={PortraitTest}
              alt={`${player.name}'s portrait`}
              sx={{ height: "320px", alignSelf: "flex-start", mr: 2 }}
            ></img>
            <Grid
              sx={{
                gap: 2,
              }}
            >
              <Heading as="h1" sx={{ fontSize: 4 }}>
                Zyplos
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
                the lounge
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
                Joined on {joinDate.toDateString()}
              </Text>

              <img
                src={emblem}
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
          <ChunkCard x={1} z={37} dimension="home" claimed_on={new Date()} />
          {chunkData.data.map((chunk, index) => {
            return (
              <Button
                onClick={() => updateMapFrame(chunk.x, chunk.z)}
                p={0}
                bg="transparent"
                sx={{ textAlign: "left", cursor: "pointer" }}
              >
                <ChunkCard
                  key={index}
                  x={chunk.x}
                  z={chunk.z}
                  dimension="The Overworld"
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
