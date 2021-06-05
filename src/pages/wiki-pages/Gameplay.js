/** @jsxImportSource theme-ui */
import { Heading, Grid, Text, Alert } from "theme-ui";
import SmallCardGrid from "../../components/SmallCardGrid";
import ArticleLayout from "../../internals/ArticleLayout";

function Gameplay() {
  return (
    <ArticleLayout title="Gameplay">
      <Grid>
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
            <Text>false</Text>
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

        <Heading>Graves on Player Death</Heading>
        <Text>
          Unlike previous seasons, keepInventory is turned off to keep that
          vanilla feel that certain players prefer. To keep balance and fun,
          your items will not drop but instead be placed into a grave that you
          can later visit and retrieve your items from.
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
          All mobs have a chance to drop their own head as an item. These
          chances can be increased with the <b>Looting</b> enchantment.
        </Text>
        <Text>
          The Ender Dragon will drop an Elytra and a Dragon Egg when defeated.
        </Text>
        <Text>
          Shulkers have a chance of dropping more than 1 Shulker Shell.
        </Text>
      </Grid>
    </ArticleLayout>
  );
}

export default Gameplay;
