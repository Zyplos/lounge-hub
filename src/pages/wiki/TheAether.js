/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text, Divider, Image } from "@theme-ui/components";

import MainLayout from "../../layouts/MainLayout";

import aether from "../../assets/2020-06-22_20.30.41.png";

export default () => {
  return (
    <MainLayout>
      <Grid>
        <Heading as="h1">The Aether</Heading>
        <Divider />
        <Image
          src={aether}
          alt="The Aether with a portal"
          sx={{ width: "1000px", mx: "auto" }}
        />
        <Text>
          Everyone's favorite sky dimension is now available to explore in
          vanilla Minecraft! The following biomes can be found in the lounge's
          Aether:
        </Text>
        <ul>
          <li>Birch Forests</li>
          <li>Stone Shores</li>
          <li>Mountains</li>
          <li>Wooded Mountains</li>
          <li>Dark Oak Forests</li>
          <li>Jungle Islands</li>
          <li>Shattered Savannas</li>
        </ul>
        <Text>
          Sleeping is allowed in The Aether! Set a bed down and your spawn point
          will be set in The Aether.
        </Text>

        <Heading>Portal</Heading>
        <Text>
          Getting to The Aether requires <b>14 Glowstone Blocks</b>. They must
          be arranged the classic Nether Portal way (4x5, the corners must be
          filled in too). Light up the portal by right clicking the portal with
          a <b>Water Bucket</b>.
        </Text>
        <Text>
          Aether Portal traveling is different from Nether Portal traveling. The
          portal coordinates will be the exact same in The Overworld and The
          Aether.
        </Text>
      </Grid>
    </MainLayout>
  );
};
