/** @jsxImportSource theme-ui */
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { Text, Spinner, Flex, Badge, Grid } from "theme-ui";

import FullBox from "./FullBox";

function DiscordServer() {
  const { data: discordData, error } = useSWR("https://canary.discordapp.com/api/guilds/426394718172086273/widget.json");
  if (error) {
    return (
      <FullBox>
        <Text variant="fullbox">Error getting Discord status.</Text>
        <pre>{JSON.stringify(error, false, 1)}</pre>
      </FullBox>
    );
  }
  if (!discordData) {
    return (
      <FullBox>
        <Spinner title="Loading Discord Status" size={200} />
        Loading Discord status.
      </FullBox>
    );
  }
  const knownBots = ["Metabyte", "Buggy", "scooter", "Sine", "Tessie", "Maestro", "Rythm", "NotSoBot", "ProBot"];
  const voiceChannelId = "426394718591778818";
  const voiceChannel = discordData.channels.find((channel) => channel.id === voiceChannelId);
  const numberInVoice = discordData.members.filter((m) => m.channel_id == voiceChannelId).length;
  console.log(discordData);
  const iconStyle = {
    width: "64px",
    height: "64px",
    mr: 2,
    border: "2px solid #7289DA",
    borderRadius: "100%",
    "& img": {
      borderRadius: "100%",
    },
  };
  const statusStyles = {
    online: {
      border: "2px solid #3eff58",
    },
    idle: {
      border: "2px solid #ffde00",
    },
    dnd: {
      border: "2px solid #ff3e3e",
    },
    streaming: {
      border: "2px solid #8f48ff",
    },
  };
  return (
    <React.Fragment>
      <Grid
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            p: 2,
            alignItems: "center",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" sx={{ ...iconStyle, position: "relative" }}>
            <path
              style={{
                fill: "#5865f2",
              }}
              d="M0 0h60v60H0z"
            />
            <path
              d="M29.8 14.98c-.63-.26-1.35-.12-1.83.37l-7.23 7.92h-5.05c-.93 0-1.68.76-1.68 1.68v10.1c0 .93.76 1.68 1.68 1.68h5.05l7.23 7.92c.48.48 1.21.63 1.83.37a1.69 1.69 0 0 0 1.04-1.56V16.53c0-.68-.41-1.3-1.04-1.55Zm4.4 3.24v3.37c4.64 0 8.42 3.78 8.42 8.42s-3.78 8.42-8.42 8.42v3.37c6.5 0 11.78-5.28 11.78-11.78S40.69 18.24 34.2 18.24Zm0 6.73c2.78 0 5.05 2.27 5.05 5.05s-2.27 5.05-5.05 5.05v-3.37c.93 0 1.68-.76 1.68-1.68s-.76-1.68-1.68-1.68v-3.37Z"
              style={{
                fill: "#fff",
              }}
            />
          </svg>

          <Flex sx={{ justifyContent: "center", flexDirection: "column" }}>
            <Text
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              voice
            </Text>

            <Text
              variant={"muted"}
              sx={{
                fontSize: "14px",
              }}
            >
              <Text as="span" variant="bold">
                {numberInVoice}
              </Text>{" "}
              in channel.
            </Text>
          </Flex>
        </Flex>

        {discordData.members.map((member, index) => {
          return (
            <Flex
              key={index}
              sx={{
                flexDirection: "row",
                background: member.status === "streaming" ? "linear-gradient(0deg, rgba(145,70,255,0.7) 0%, rgba(255,0,185,0) 75%)" : "none",
                color: member.status === "streaming" ? "white" : "text",
                p: 2,
                alignItems: "center",
              }}
            >
              <div sx={{ ...iconStyle, ...statusStyles[member.status], position: "relative" }}>
                <Image alt="profile" layout="fixed" src={member.avatar_url} width={60} height={60} />
              </div>

              <Flex sx={{ justifyContent: "center", flexDirection: "column" }}>
                <Text
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {member.username}
                  {knownBots.includes(member.username) && (
                    <Badge variant="discord" sx={{ ml: 2 }}>
                      Bot
                    </Badge>
                  )}
                </Text>
                {member.status === "streaming" && (
                  <Text as="span" variant="bold">
                    Live on Twitch!
                  </Text>
                )}
                {member.game && (
                  <Text
                    variant={member.status === "streaming" ? "white" : "muted"}
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    <Text as="span" variant="bold">
                      Playing
                    </Text>{" "}
                    {member.game.name}
                  </Text>
                )}
              </Flex>
            </Flex>
          );
        })}
      </Grid>
      <Text variant="muted">{discordData.members.length} currently online.</Text>
    </React.Fragment>
  );
}

export default DiscordServer;
