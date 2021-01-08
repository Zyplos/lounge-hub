// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

// import MainLayout from "../layouts/MainLayout";
// import DiscordServerOverview from "../components/DiscordServerOverview";
// import MinecraftStatus from "../components/MinecraftStatus";

// import MinecraftContext from "../internals/MinecraftContext";

import MainLayout from "../layouts/MainLayout";
import Stack from "../components/system/Stack";
import Heading from "../components/system/Heading";
import DiscordServerOverview from "../components/DiscordServerOverview";
import MinecraftStatus from "../components/MinecraftStatus";
import MinecraftContext from "../internals/MinecraftContext";

function Home() {
  const minecraftData = useContext(MinecraftContext);

  return (
    <MainLayout>
      <Stack gap={3}>
        {minecraftData && (
          <Stack gap={5} columns={[1, 1, 2]}>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Vanilla</Heading>
              <MinecraftStatus data={minecraftData.vanilla} ip="mc.zyand.co" />
            </div>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Enigmatica 2</Heading>
              <MinecraftStatus
                data={minecraftData.modded}
                ip="mc.zyand.co:25577"
              />
            </div>
          </Stack>
        )}
        <Heading sx={{ mt: 4 }}>the lounge</Heading>
        <DiscordServerOverview />
      </Stack>
    </MainLayout>
  );
}

export default Home;
