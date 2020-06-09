/** @jsx jsx **/
import { jsx } from "@theme-ui/core";
import { Flex, Text, Alert, Grid } from "@theme-ui/components";
import useSWR from "swr";

export default (props) => {
  const { data, error } = useSWR(`https://api.mcsrvstat.us/2/${props.ip}`);
  if (error) {
    return <p>error</p>;
  }
  if (!data) {
    return <p>loading minecraft</p>;
  }

  const getPlayerImage = (username) => {
    return `https://minotar.net/helm/${username}/100.png`;
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

  if (!data.online) {
    return <Alert>This server is currently offline.</Alert>;
  }

  return (
    <Grid>
      <Flex sx={{ flexDirection: "row" }}>
        <div>
          <img
            class="server-image mr-4"
            src={data.icon}
            alt="server icon"
            sx={{ mr: 3 }}
          />
        </div>
        <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
          <Text>{data.motd.clean[0]}</Text>
          <Text>{data.motd.clean[1]}</Text>
        </Flex>
      </Flex>
      <Text>
        IP: {props.ip} •{" "}
        {data.players.online !== 0 ? data.players.online : "No "}
        {computedPlural()} online
        {data.version ? " • " + data.version : ""}
      </Text>
      {data.players.online === 0 && <Alert>No one's online.</Alert>}
      {data.players.online > 0 && data.players.list && (
        <Flex sx={{ flexDirection: "row" }}>
          {data.players.list.map((player, index) => {
            return (
              <Flex
                key={index}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 0,
                }}
              >
                <img
                  src={getPlayerImage(player)}
                  alt="player icon"
                  sx={{ width: "45px", height: "45px" }}
                />

                <Text>{player}</Text>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Grid>
  );
};
