/** @jsx jsx **/
import { jsx } from "@theme-ui/core";
import { Flex, Text, Alert, Grid } from "@theme-ui/components";
import useSWR from "swr";

import defaultServerIcon from "../assets/defaultServerIcon.png";

export default (props) => {
  const data = props.data;

  console.log(data);

  const getPlayerImage = (uuid) => {
    return `https://crafatar.com/avatars/${uuid}?size=64&default=MHF_Steve&overlay`;
  };

  const computedPlural = () => {
    if (data.players) {
      if (data.players.online === 1) {
        return "player";
      } else {
        return "players";
      }
    }
    return "players";
  };

  if (!data || !data.description) {
    return <Alert>This server is currently offline.</Alert>;
  }

  return (
    <Grid>
      <Flex sx={{ flexDirection: "row" }}>
        <div>
          <img
            class="server-image mr-4"
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
        IP: {props.ip} •{" "}
        {data.players.online !== 0 ? data.players.online : "No"}{" "}
        {computedPlural()} online
        {data.version ? " • " + data.version.name : ""}
      </Text>
      {data.players.online === 0 && <Alert>No one's online.</Alert>}
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
                  sx={{ width: "45px", height: "45px" }}
                />

                <Text>{player.name}</Text>
              </Flex>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};
