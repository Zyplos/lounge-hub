/** @jsxImportSource theme-ui */
import { Flex, Text, Alert, Grid } from "theme-ui";

import defaultServerIcon from "../assets/defaultServerIcon.png";
import MinecraftStatusSkeleton from "./MinecraftStatusSkeleton";

function MinecraftStatus(props) {
  const data = props.data;

  if (!data) {
    return <MinecraftStatusSkeleton />;
  }

  const getPlayerImage = (uuid) => {
    return `https://crafatar.com/avatars/${uuid}?size=64&default=MHF_Steve&overlay`;
  };

  const computedPlural = () => {
    if (!data.players) return "players";

    return data.players.online === 1 ? "player" : "players";
  };

  if (!data || !data.description) {
    return <Alert>This server is currently offline.</Alert>;
  }

  // sort players so they dont change positions on component refresh
  if (data.players.online > 0 && data.players.sample) {
    data.players.sample.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  return (
    <Grid>
      <Flex sx={{ flexDirection: "row" }}>
        <div>
          <img
            src={data.favicon || defaultServerIcon}
            alt="server icon"
            sx={{ mr: 3 }}
          />
        </div>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Minecraft, monospace",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data.description.html }}
          ></div>
        </Flex>
      </Flex>
      <Text>
        {/* IP: {props.ip} •{" "} */}
        {data.players.online !== 0 ? data.players.online : "No"}{" "}
        {computedPlural()} online
        {data.version ? " • " + data.version.name : ""}
      </Text>
      {data.players.online === 0 && <Text>No one's online at the moment.</Text>}
      {data.players.online > 0 && data.players.sample && (
        <Grid sx={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {data.players.sample.map((player, index) => {
            return (
              <Flex
                key={index}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  m: 0,
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={getPlayerImage(player.id)}
                  alt="player icon"
                  sx={{ width: "45px", height: "45px", mb: 1 }}
                />

                <Text>{player.name}</Text>
              </Flex>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
}

export default MinecraftStatus;
