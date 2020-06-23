/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text, Badge, Divider } from "@theme-ui/components";

import MainLayout from "../../layouts/MainLayout";

export default () => {
  return (
    <MainLayout>
      <Grid>
        <Heading as="h1">Server History</Heading>
        <Divider />
        <Heading>Vanilla Minecraft</Heading>
        <Grid
          sx={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
            gridAutoRows: "1fr",
            "& > div": {
              bg: "cardBg",
              p: 3,
              borderRadius: "10px",
            },
          }}
        >
          <div>
            <Heading>
              Season 4 <Badge>Current</Badge>
            </Heading>
            <Text>1.16</Text>
          </div>
          <div>
            <Heading>Season 3</Heading>
            <Text>1.14 / 1.15</Text>
          </div>
          <div>
            <Heading>Season 2</Heading>
            <Text>1.13</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>1.13</Text>
          </div>
        </Grid>

        <Heading>Modded Minecraft</Heading>
        <Grid
          sx={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
            gridAutoRows: "1fr",
            "& > div": {
              bg: "cardBg",
              p: 3,
              borderRadius: "10px",
            },
          }}
        >
          <div>
            <Heading>Season 5</Heading>
            <Text>Tekxit</Text>
          </div>
          <div>
            <Heading>Season 4</Heading>
            <Text>Enigmatica 2</Text>
          </div>
          <div>
            <Heading>Season 3</Heading>
            <Text>Skyfactory</Text>
          </div>
          <div>
            <Heading>Season 2</Heading>
            <Text>Pixelmon</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>zy & co.'s modpack</Text>
          </div>
        </Grid>

        <Heading>Terraria</Heading>
        <Grid
          sx={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
            gridAutoRows: "1fr",
            "& > div": {
              bg: "cardBg",
              p: 3,
              borderRadius: "10px",
            },
          }}
        >
          <div>
            <Heading>Season 2</Heading>
            <Text>Journey's End</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>1.3</Text>
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
