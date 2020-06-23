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
        <blockquote cite="https://zyplos.dev/ram.exe/">
          <p>
            i literally have no idea. ill put a command block for it somewhere i
            guess. make a nice place for it
          </p>
          <footer>
            — me, <cite>just now</cite>
          </footer>
        </blockquote>
      </Grid>
    </MainLayout>
  );
};
