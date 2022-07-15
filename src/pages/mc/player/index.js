/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Heading, Grid, Button, Text, Alert } from "theme-ui";
import MainLayout from "../../../internals/MainLayout";
import FullBox from "../../../components/FullBox";

function IndexPlayer() {
  const [playerName, setPlayerName] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/mc/player/" + playerName);
  };

  return (
    <MainLayout noPadding>
      <FullBox useDims={true}>
        <form onSubmit={handleSubmit}>
          <Grid>
            <Text variant="muted">TODO: make this look better</Text>
            <Heading as="h1">Player Lookup</Heading>

            {router.query.notfound && <Alert>Player not found.</Alert>}
            <label>
              Player Name: <input name="playerName" type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required />
            </label>

            <Button>View Profile</Button>
          </Grid>
        </form>
      </FullBox>
    </MainLayout>
  );
}

export default IndexPlayer;
