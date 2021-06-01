/** @jsxImportSource @theme-ui/core */
import { Box, Grid, Heading, Spinner, Text } from "@theme-ui/components";
import { useParams } from "react-router";
import useSWR from "swr";
import FullBox from "../../components/FullBox";
import {
  mapUrlBase,
  DimensionInternalNameMap,
  DimensionColorMap,
  findChunkCenter,
  prettyPrintDate,
  prettyPrintDateAndTime,
} from "../../internals/Utils";

import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import PlayerIcon from "../../assets/player-icon.png";

const ChunkCard = ({ enteredTime, playerUUID, name }) => {
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
        <img
          src={`https://crafatar.com/avatars/${playerUUID}?size=64&overlay`}
          alt={`${name}'s Head`}
          sx={{ borderRadius: "9px" }}
        />
      </div>
      <Grid>
        <Text sx={{ variant: "text.heading", fontSize: 3 }}>{name}</Text>
        <Text>Visited {prettyPrintDateAndTime(enteredTime)}</Text>
      </Grid>
    </div>
  );
};

function VisitorsLog() {
  const { uuid, x, z } = useParams();

  const { data: logData, logError } = useSWR(
    `/api/minecraft/logEntryByCoords?x=${x}&z=${z}&dimension=${uuid}`
  );
  const { data: chunkData, chunkError } = useSWR(
    `/api/minecraft/chunkByCoords?x=${x}&z=${z}&dimension=${uuid}`
  );

  if (logError) {
    return (
      <FullBox useDims>
        <Text variant="fullbox">Error getting log data.</Text>
        <pre>{JSON.stringify(logError, false, 1)}</pre>
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
  if (!logData) {
    return (
      <FullBox useDims>
        <Spinner title="Loading Player Data" size={200} />
      </FullBox>
    );
  }
  if (!chunkData) {
    return (
      <FullBox useDims>
        <Spinner title="Loading Chunk Data" size={200} />
      </FullBox>
    );
  }

  const newCoords = findChunkCenter(x, z);
  const ownedChunk = chunkData.data[0];

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
          bg={DimensionColorMap[ownedChunk.dimension]}
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
              src={`https://visage.surgeplay.com/full/304/${ownedChunk.player_id}`}
              alt={`${ownedChunk.name}'s portrait`}
              sx={{ height: "320px", alignSelf: "flex-start", mr: 2 }}
            ></img>
            <Grid
              sx={{
                gap: 2,
              }}
            >
              <Heading as="h1" sx={{ fontSize: 4 }}>
                Chunk ({x}, {z})
              </Heading>

              <Text>
                <img
                  src={PlayerIcon}
                  sx={{
                    height: (theme) => theme.fontSizes[3],
                    width: (theme) => theme.fontSizes[3],
                    fill: "white",
                    verticalAlign: "text-bottom",
                    mr: 2,
                  }}
                  alt="Head Icon"
                />
                Owned by {ownedChunk.name}
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
                Claimed {prettyPrintDate(new Date(ownedChunk.claimed_on))}
              </Text>
            </Grid>
          </div>
        </Box>
        <Grid p={4}>
          {logData.data.map((logEntry, index) => {
            return (
              <ChunkCard
                key={index}
                enteredTime={new Date(logEntry.entered_time)}
                playerUUID={logEntry.player_id}
                name={logEntry.name}
              />
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
          src={`${mapUrlBase}/#${DimensionInternalNameMap[uuid]}:${newCoords.x}:${newCoords.y}:${newCoords.z}:30:0:0:0:0:perspective`}
          title={`chunk`}
        ></iframe>
      </div>
    </Grid>
  );
}

export default VisitorsLog;
