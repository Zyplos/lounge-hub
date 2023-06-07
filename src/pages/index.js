/** @jsxImportSource theme-ui */
import { useContext } from "react";
import { Heading, Grid, Message, Paragraph, Alert } from "theme-ui";
import MainLayout from "../internals/MainLayout";

import useSWR from "swr";

import DiscordServer from "../components/DiscordServer";
import MinecraftStatus from "../components/MinecraftStatus";

import { useMinecraftData } from "../internals/MinecraftContext";

function Home() {
  const minecraftData = useMinecraftData();
  const vanilla = minecraftData ? minecraftData.vanilla : null;
  const modded = minecraftData ? minecraftData.modded : null;

  return (
    <MainLayout>
      <Grid gap={3}>
        <Grid gap={5} columns={[1, 1, 2]}>
          <div>
            <Heading sx={{ mb: 3 }}>Minecraft • Main Server</Heading>
            <MinecraftStatus data={vanilla} ip="???" />
          </div>
          <div>
            <Heading sx={{ mb: 3 }}>Minecraft • Off-season</Heading>
            <MinecraftStatus data={modded} ip="???" />
          </div>
        </Grid>

        <Alert variant="info" sx={{ mt: 4 }}>
          The land claims system, player lookups, and other features are currently not working due to the recent release of Minecraft 1.20. They will be fixed as things
          are updated for the new version.
        </Alert>

        <Heading sx={{ mt: 4 }}>the lounge</Heading>
        <DiscordServer />
      </Grid>
    </MainLayout>
  );
}

export default Home;
