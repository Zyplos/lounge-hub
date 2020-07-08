/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text, Divider, Image } from "@theme-ui/components";

import MainLayout from "../../layouts/MainLayout";

import aether from "../../assets/2020-06-23_01.43.10.png";

export default () => {
  return (
    <MainLayout>
      <Grid>
        <Heading as="h1">The Deep Dark</Heading>
        <Divider />
        <Image
          src={aether}
          alt="The Aether with a portal"
          sx={{ width: "1000px", mx: "auto" }}
        />
        <Text>
          Venture into a dark dimension full of caves! Emeralds will spawn more
          than usual here. Terrain above Y=130 won't have caves but may have
          giant caverns. Lava in this dimension will also spread much quicker
          than in The Overworld!
        </Text>

        <Text>
          You cannot sleep in The Deep Dark. Respawn Anchors also will not work
          here.
        </Text>

        <Heading>Entering the Deep Dark</Heading>
        <Text>
          You need a <b>Deep Dark Teleporter</b> to get to The Deep Dark. To
          make one, drop <b>4 obsidian</b>, <b>4 ender pearls</b>, and{" "}
          <b>1 diamond block</b> on top of a crafting table
        </Text>
        <Text>
          The portal block will only work on the overworld. Once you've placed
          it down <kbd>Shift</kbd> on the block for a few seconds and you'll be
          teleported to The Deep Dark.
        </Text>
      </Grid>
    </MainLayout>
  );
};
