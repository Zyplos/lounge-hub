/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex } from "@theme-ui/components";

import Navbar from "../components/Navbar";
import DiscordServerOverview from "../components/DiscordServerOverview";
import MinecraftStatus from "../components/MinecraftStatus";

function Home() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        minHeight: "100vh",
      }}
      id="App"
    >
      <section
        sx={{
          display: "flex",
          "& > div": {
            py: 4,
            px: 3,
          },
        }}
      >
        <Navbar />
      </section>
      <main
        sx={{
          flexGrow: "1",
          p: 4,
        }}
      >
        <Grid gap={3}>
          <Grid gap={5} columns={2}>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Vanilla</Heading>
              <MinecraftStatus ip="mc.zyand.co" />
            </div>
            <div>
              <Heading sx={{ mb: 3 }}>Minecraft • Modded</Heading>
              <MinecraftStatus ip="mc.zyand.co:25577" />
            </div>
          </Grid>
          <Heading sx={{ mt: 4 }}>the lounge</Heading>
          <DiscordServerOverview />
        </Grid>
      </main>
    </div>
  );
}

export default Home;
