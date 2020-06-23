/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text, Divider } from "@theme-ui/components";

import MainLayout from "../../layouts/MainLayout";

export default () => {
  return (
    <MainLayout>
      <Grid>
        <Heading as="h1">Mobs</Heading>
        <Divider />
        <Text>Mob behavior has been modified a bit:</Text>
        <Text>
          Mob griefing is <b>NOT</b> off. This is to allow villager mob farms to
          function. However, creeper explosions are disabled.
        </Text>
        <Text>
          All mobs have a chance to drop their own head as an item. These
          chances can be increased with the <b>Looting</b> enchantment.
        </Text>
        <Text>
          The Ender Dragon will drop an Elytra and a Dragon Egg when it dies.
        </Text>
        <Text>Shulkers will drop more than 1 Shulker Shell.</Text>
      </Grid>
    </MainLayout>
  );
};
