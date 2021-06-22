/** @jsxImportSource theme-ui */
import { Heading, Grid, Text, Alert } from "theme-ui";
import MinecraftText from "../../components/MinecraftText";
import SmallCardGrid from "../../components/SmallCardGrid";
import ArticleLayout from "../../internals/ArticleLayout";

function Gameplay() {
  return (
    <ArticleLayout title="Gameplay">
      <Grid>
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
          Only a third of the people online have to sleep for it to turn to day.
        </Text>

        <Heading>Nicknames and Colors</Heading>
        <Text>
          Players can set their own nickname by doing{" "}
          <MinecraftText>/nickname [name]</MinecraftText>.
        </Text>
        <Text>
          You can use standard Minecraft colors in your nickname. You can also
          use custom hex colors, for example:{" "}
          <MinecraftText>/nickname &#ff9d00[name]</MinecraftText>. This would
          give you an orange name.
        </Text>

        <Heading>Graves on Player Death</Heading>
        <Alert>This will be implemented later.</Alert>
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
