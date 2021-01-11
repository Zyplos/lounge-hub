/** @jsxImportSource @emotion/react */

import defaultServerIcon from "../assets/defaultServerIcon.png";

function MinecraftStatus(props) {
  const data = props.data;

  console.log(data);

  const getPlayerImage = (uuid) => {
    return `https://crafatar.com/avatars/${uuid}?size=64&default=MHF_Steve&overlay`;
  };

  const computedPlural = () => {
    if (data.samplePlayers) {
      if (data.onlinePlayers === 1) {
        return "player";
      } else {
        return "players";
      }
    }
    return "players";
  };

  if (!data || !data.description) {
    return <h1>This server is currently offline.</h1>;
  }

  if (data.onlinePlayers > 0 && data.samplePlayers) {
    data.samplePlayers.sort(function (a, b) {
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
    <div css={{ display: "grid" }}>
      <div css={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img
            className="server-image mr-4"
            src={data.favicon || defaultServerIcon}
            alt="server icon"
            css={{ mr: 3 }}
          />
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Minecraft, monospace",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data.description.html }}
          ></div>
        </div>
      </div>
      <p>
        IP: {props.ip} • {data.onlinePlayers !== 0 ? data.onlinePlayers : "No"}{" "}
        {computedPlural()} online
        {data.version ? " • " + data.version : ""}
      </p>
      {data.onlinePlayers === 0 && <h1>No one's online.</h1>}
      {data.onlinePlayers > 0 && data.samplePlayers && (
        <div css={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {data.samplePlayers.map((player, index) => {
            return (
              <div
                key={index}
                css={{
                  flexDirection: "column",
                  alignItems: "center",
                  m: 0,
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={getPlayerImage(player.id)}
                  alt="player icon"
                  css={{ width: "45px", height: "45px" }}
                />

                <p>{player.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MinecraftStatus;
