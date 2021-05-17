/** @jsxImportSource @theme-ui/core */
import { Heading, Grid, Text, Divider, Alert } from "@theme-ui/components";
import SmallCardGrid from "../../components/SmallCardGrid";

function Gameplay() {
  return (
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
      <Alert>
        This page is currently under development for Season 5 (1.17).
      </Alert>
      <Text>
        Some stuff on the server functions a little differently from Vanilla.
      </Text>

      <Heading>Gamerules</Heading>
      <SmallCardGrid>
        <div>
          <Heading>keepInventory</Heading>
          <Text>true</Text>
        </div>
        <div>
          <Heading>mobGriefing</Heading>
          <Text>false*</Text>
        </div>
        <div>
          <Heading>doWeatherCycle</Heading>
          <Text>false</Text>
        </div>
        <div>
          <Heading>maxEntityCramming</Heading>
          <Text>45</Text>
        </div>
      </SmallCardGrid>

      <Heading>Sleeping</Heading>
      <Text>
        Only half of the people online have to sleep for it to turn to day.
      </Text>

      <Heading>Mobs</Heading>
      <Text>Mob behavior has been modified a bit:</Text>
      <Text>
        Mob griefing is technically off. However, this gamerule has been split
        into two. Hostile mobs that grief the world will no longer do so.
        Creepers will still damage the player. Passive mobs that can break
        blocks (like Villagers) will still be able to break blocks.
      </Text>
      <Text>
        All mobs have a chance to drop their own head as an item. These chances
        can be increased with the <b>Looting</b> enchantment.
      </Text>
      <Text>
        The Ender Dragon will drop an Elytra and a Dragon Egg when defeated.
      </Text>
      <Text>Shulkers have a chance of dropping more than 1 Shulker Shell.</Text>
    </Grid>
  );
}

export default Gameplay;
