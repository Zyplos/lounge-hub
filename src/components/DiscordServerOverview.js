/** @jsxImportSource @emotion/react */
import React from "react";
import useSWR from "swr";

import Fullbox from "../components/Fullbox";

function DiscordServerOverview() {
  const { data: discordData, error } = useSWR(
    "https://canary.discordapp.com/api/guilds/426394718172086273/widget.json"
  );
  if (error)
    return (
      <Fullbox>
        <p variant="fullbox">Error getting Discord status.</p>
        <pre>{JSON.stringify(error, false, 1)}</pre>
      </Fullbox>
    );
  if (!discordData)
    return (
      <Fullbox>
        <h1>loading</h1>
      </Fullbox>
    );
  const knownBots = [
    "Metabyte",
    "Buggy",
    "scooter",
    "Sine",
    "Tessie",
    "Maestro",
    "Rythm",
    "NotSoBot",
  ];
  const voiceChannel = discordData.channels.find(
    (channel) => channel.id === "426394718591778818"
  );
  const iconStyle = {
    width: 55,
    height: 55,
    borderRadius: "100%",
    mr: 2,
    border: "2px solid #7289DA",
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
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: 2,
          }}
        >
          <div>
            <svg
              name="Speaker"
              aria-hidden="false"
              viewBox="0 0 24 24"
              css={iconStyle}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
              />
            </svg>
          </div>
          <div css={{ display: "flex", justifyContent: "center" }}>
            <p>{voiceChannel.name}</p>
          </div>
        </div>

        {discordData.members.map((member, index) => {
          return (
            <div
              key={index}
              css={{
                display: "flex",
                flexDirection: "row",
                background:
                  member.status === "streaming"
                    ? "linear-gradient(0deg, rgba(145,70,255,0.7) 0%, rgba(255,0,185,0) 75%)"
                    : "none",
                color: member.status === "streaming" ? "white" : "text",
                p: 2,
              }}
            >
              <img
                alt="profile"
                src={member.avatar_url}
                css={{ ...iconStyle, ...statusStyles[member.status] }}
              />

              <div
                css={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  css={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {member.username}
                  {knownBots.includes(member.username) && (
                    <span variant="discord" css={{ ml: 2 }}>
                      Bot
                    </span>
                  )}
                </p>
                {member.status === "streaming" && <b>Live on Twitch!</b>}
                {member.game && (
                  <p
                    variant={member.status === "streaming" ? "white" : "muted"}
                    css={{
                      fontSize: "14px",
                    }}
                  >
                    <b>Playing</b> {member.game.name}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <span css={{ width: "50px", textAlign: "center" }}>
        {discordData.members.length} / 42
      </span>
    </React.Fragment>
  );
}

export default DiscordServerOverview;
