/** @jsxImportSource theme-ui */
import { Heading, Grid, Text } from "theme-ui";
import Link from "next/link";
import MinecraftText from "../../components/MinecraftText";
import SmallCardGrid from "../../components/SmallCardGrid";
import ArticleLayout from "../../internals/ArticleLayout";

function Gameplay() {
  return (
    <ArticleLayout title="Gameplay">
      <Grid>
        <Text>Some stuff on the server functions a little differently from Vanilla.</Text>

        <Heading>Gamerules</Heading>
        <SmallCardGrid>
          <div>
            <Heading>keepInventory</Heading>
            <Text>true</Text>
          </div>
          <div>
            <Heading>mobGriefing</Heading>
            <Text>true</Text>
          </div>
          <div>
            <Heading>sleepingPercent</Heading>
            <Text>33</Text>
          </div>
        </SmallCardGrid>

        <Heading>Sleeping</Heading>
        <Text>Only a third of the people online have to sleep for it to turn to day.</Text>

        <Heading>Name Colors</Heading>
        <Text>
          Players can recolor their username in chat by doing <MinecraftText>/trigger color</MinecraftText>.
        </Text>

        <Heading>Mobs</Heading>
        <Text>
          All mobs have a chance to drop their own head as an item. These chances can be increased with the <b>Looting</b> enchantment.
        </Text>
        <Text>Shulkers will always drop 2 Shulker Shells.</Text>
        <Text>You can trade with Wandering Villagers to get Mini Blocks.</Text>
        <Text>
          Various <Link href="/wiki/crafting-recipes">crafting recipes</Link> have been added to make things a bit easier.
        </Text>
      </Grid>
    </ArticleLayout>
  );
}

export default Gameplay;
