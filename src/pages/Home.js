/** @jsxImportSource @theme-ui/core */
import { useContext } from "react";
import { Heading, Grid } from "@theme-ui/components";
import MainLayout from "../internals/MainLayout";

import DiscordServer from "../components/DiscordServer";
import MinecraftStatus from "../components/MinecraftStatus";

import MinecraftContext from "../internals/MinecraftContext";

function Home() {
  const minecraftData = useContext(MinecraftContext);
  return (
    <MainLayout>
      <Grid gap={3}>
        {minecraftData && (
          <Grid gap={5} columns={[1, 1, 2]}>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Main Server</Heading>
              <MinecraftStatus
                data={minecraftData.vanilla}
                ip="mc.lounge.haus"
              />
            </div>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Off-season</Heading>
              <MinecraftStatus
                data={minecraftData.modded}
                ip="modded.lounge.haus"
              />
            </div>
          </Grid>
        )}
        <Heading sx={{ mt: 4 }}>the lounge</Heading>
        <DiscordServer />
      </Grid>
    </MainLayout>
  );
}

export default Home;
