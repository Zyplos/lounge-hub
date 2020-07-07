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
          Mob griefing is technically off. However, this gamerule has been split
          into two. Hostile mobs that grief the world will no longer do so.
          Creepers should do damage again. Passive mobs that can break blocks
          (like Villagers) will still be able to break blocks.
        </Text>
        <Text>
          All mobs have a chance to drop their own head as an item. These
          chances can be increased with the <b>Looting</b> enchantment.
        </Text>
        <Text>
          The Ender Dragon will drop an Elytra and a Dragon Egg when it dies.
        </Text>
        <Text>Shulkers can drop more than 1 Shulker Shell.</Text>
      </Grid>
    </MainLayout>
  );
};
