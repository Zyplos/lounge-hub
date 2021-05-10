/** @jsxImportSource @theme-ui/core */
import React from "react";
import { Grid, Text } from "@theme-ui/components";
import WikiCard from "../../components/WikiCard";

import craftingTable from "../../assets/crafting-table.png";
import glowstone from "../../assets/glowstone.png";
// import zombieHead from "../../assets/zombie-head.png";
import grassBlock from "../../assets/grass-block.png";
import commandBlock from "../../assets/command-block.png";
import jigsawBlock from "../../assets/jigsaw-block.png";
// import endPortal from "../../assets/end-portal-frame-filled.png";

function WikiHome() {
  return (
    <React.Fragment>
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
            fontFamily: "Minecraft, monospace",
          }}
        >
          <Text sx={{ fontSize: [2, 3] }}>the lounge SMP's</Text>
          <Text sx={{ fontSize: [5, 6] }}>Server Wiki</Text>
        </div>
        <WikiCard
          link="/wiki/changelog"
          image={commandBlock}
          gradient={{ left: "#f0ac80", right: "#f65625" }}
          heading="Changelog"
          description="Record of all seasons so far."
        />
        <WikiCard
          link="/wiki/crafting-recipes"
          image={craftingTable}
          gradient={{ left: "#F05F57", right: "#360940" }}
          heading="Crafting Recipes"
          description="Makes obtaining some stuff a bit easier."
        />
        <WikiCard
          link="/wiki/gameplay"
          image={jigsawBlock}
          gradient={{ left: "#667eea", right: "#764ba2" }}
          heading="Gameplay"
          description="A few quality of life changes to Vanilla."
        />
        <WikiCard
          link="/wiki/land-claiming"
          image={grassBlock}
          gradient={{ left: "#67be51", right: "#267712" }}
          heading="Land Claiming"
          description="Claim land for your community."
        />
        <WikiCard
          link="/wiki/the-aether"
          image={glowstone}
          gradient={{ left: "#72EDF2", right: "#5151E5" }}
          heading="The Aether"
          description="Travel into the sky dimension!"
        />
      </Grid>
    </React.Fragment>
  );
}

export default WikiHome;
