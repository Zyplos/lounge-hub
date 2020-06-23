/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex, Text } from "@theme-ui/components";

import WikiCard from "../components/WikiCard";
import MainLayout from "../layouts/MainLayout";

import craftingTable from "../assets/crafting-table.png";
import glowstone from "../assets/glowstone.png";
import zombieHead from "../assets/zombie-head.png";
import stone from "../assets/stone.png";
import commandBlock from "../assets/command-block.png";
import jigsawBlock from "../assets/jigsaw-block.png";
import endPortal from "../assets/end-portal-frame-filled.png";

function Wiki() {
  return (
    <MainLayout>
      <Grid
        sx={{
          gridTemplateColumns: [
            "repeat(auto-fill, minmax(200px, 1fr) )",
            "repeat(auto-fill, minmax(500px, 1fr) )",
          ],
          gridAutoRows: "1fr",
        }}
      >
        <div
          sx={{
            display: "flex",
            background: "linear-gradient( 135deg, #f06e6e 10%, #ff3e3e 100%)",
            p: [2, 5],
            borderRadius: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: ["center", "start"],
          }}
        >
          <Text sx={{ fontSize: [2, 3] }}>welcome to zy & co.'s</Text>
          <Text sx={{ fontSize: [5, 6], fontFamily: "Minecraft, monospace" }}>
            Server Wiki
          </Text>
        </div>
        <WikiCard
          link="/wiki/servers"
          image={endPortal}
          gradient={{ left: "#537895", right: "#09203F" }}
          heading="Servers"
          description="Sometimes it's not just Vanilla."
        />
        <WikiCard
          link="/wiki/crafting-recipes"
          image={craftingTable}
          gradient={{ left: "#F05F57", right: "#360940" }}
          heading="Crafting Recipes"
          description="Makes obtaining some stuff a bit easier."
        />
        {/* <WikiCard
          link="/wiki/gamerules"
          image={commandBlock}
          gradient={{ left: "#F2A65A", right: "#772F1A" }}
          heading="Gamerules"
          description="Makes stuff a bit more fun."
        /> */}
        <WikiCard
          link="/wiki/gameplay"
          image={jigsawBlock}
          gradient={{ left: "#667eea", right: "#764ba2" }}
          heading="Gameplay"
          description="A few quality of life changes to Vanilla."
        />
        <WikiCard
          link="/wiki/mobs"
          image={zombieHead}
          gradient={{ left: "#52c234", right: "#061700" }}
          heading="Mobs"
          description="Gamerules and drops have been changed a bit."
        />
        <WikiCard
          link="/wiki/the-aether"
          image={glowstone}
          gradient={{ left: "#72EDF2", right: "#5151E5" }}
          heading="The Aether"
          description="Travel into the sky dimension!"
        />
        <WikiCard
          link="/wiki/the-deep-dark"
          image={stone}
          gradient={{ left: "#414345", right: "#232526" }}
          heading="The Deep Dark"
          description="The most valuable wasteland."
        />
      </Grid>
    </MainLayout>
  );
}

export default Wiki;
