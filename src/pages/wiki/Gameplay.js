/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text, Divider, Badge } from "@theme-ui/components";

import MainLayout from "../../layouts/MainLayout";

export default () => {
  return (
    <MainLayout>
      <Grid
        sx={{
          "& kbd": {
            backgroundColor: "#eee",
            borderRadius: "3px",
            border: "1px solid #b4b4b4",
            boxShadow:
              "0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset",
            color: "#333",
            display: "inline-block",
            fontSize: ".85em",
            fontWeight: 700,
            lineHeight: 1,
            padding: "2px 4px",
            whiteSpace: "nowrap",
          },
        }}
      >
        <Heading as="h1">Gameplay</Heading>
        <Divider />
        <Text>
          Some stuff on the server functions a little differently from Vanilla.{" "}
          <i>
            Some stuff might not work at the moment since 1.16 just came out.
          </i>
        </Text>

        <Heading>Gamerules</Heading>
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
            <Heading>keepInventory</Heading>
            <Text>true</Text>
          </div>
          <div>
            <Heading>mobGriefing</Heading>
            <Text>false</Text>
          </div>
        </Grid>

        <Heading>Sleeping</Heading>
        <Text>
          Only one person on the server has to sleep for it to turn to day.
        </Text>

        <Heading>
          Tree Chopping <Badge>Currently not working</Badge>
        </Heading>
        <Text>
          Hold <kbd>Shift</kbd> and break the bottom of a tree to break the
          entire thing down. This won't work on logs that you've placed down.
        </Text>

        <Heading>
          Veinminer <Badge>Currently not working</Badge>
        </Heading>
        <Text>
          Hold <kbd>Shift</kbd> and break an ore block to mine that entire vein.{" "}
          <i>
            Reportedly doesn't take Fortune enchantments into account. Maybe a
            future update will fix that.
          </i>
        </Text>

        <Heading>
          Hats <Badge>Currently not working</Badge>
        </Heading>
        <Text>
          Do <span sx={{ fontFamily: "Minecraft, monospace" }}>/hat</span> to
          wear blocks on your head!
        </Text>
      </Grid>
    </MainLayout>
  );
};
