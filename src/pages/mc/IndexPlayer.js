/** @jsxImportSource @theme-ui/core */
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Heading, Grid, Button, Text, Alert } from "@theme-ui/components";
import FullBox from "../../components/FullBox";

function IndexPlayer() {
  const [playerName, setPlayerName] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (event) => {
    history.push("/mc/player/" + playerName);
    event.preventDefault();
  };

  return (
    <FullBox useDims={true}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Text variant="muted">TODO: make this look better</Text>
          <Heading as="h1">Player Lookup</Heading>
          {location.hash === "#notfound" && <Alert>Player not found.</Alert>}
          <label>
            Player Name:{" "}
            <input
              name="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </label>

          <Button>View Profile</Button>
          <div>
            Test Profiles: <Link to="player/Zyplos">CiD 1</Link>{" "}
            <Link to="player/alfiemoon">CiD 2</Link>{" "}
            <Link to="player/pegg">CiD 3</Link>{" "}
            <Link to="player/ABlasterCatCD">CiD 4</Link>{" "}
          </div>
        </Grid>
      </form>
    </FullBox>
  );
}

export default IndexPlayer;
