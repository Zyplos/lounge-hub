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
        <Text>
          Various <Link href="/wiki/crafting-recipes">crafting recipes</Link> have been added to make things a bit easier.
        </Text>

        <Heading>Gamerules</Heading>
        <SmallCardGrid>
          <div>
            <Heading>keepInventory</Heading>
            <Text>true</Text>
          </div>

          <div>
            <Heading>sleepingPercent</Heading>
            <Text>33</Text>
          </div>
          <div>
            <Heading>doInsomnia</Heading>
            <Text>false</Text>
          </div>
        </SmallCardGrid>

        <Heading>Sleeping</Heading>
        <Text>Only a third of the people online have to sleep for it to turn to day.</Text>

        <Heading>Nicknames and Colors</Heading>
        <Text>
          Players can set their own nickname by doing <MinecraftText>/nickname [name]</MinecraftText>. You can use Minecraft color codes in your nickname or use custom
          hex colors by using <MinecraftText>&#&lt;hexcolor&gt;</MinecraftText>.
        </Text>
        <Text>
          For example, <MinecraftText>/nickname &#ff8408Zyp</MinecraftText> would give you an orange username with the nickname "Zyp". If you'd like just the color
          without a nickname, you can use <MinecraftText>/nickcolor [colorcode]</MinecraftText> to set your entire username to one color.
        </Text>
        <Text>
          You can do <MinecraftText>/nonick</MinecraftText> to remove your nickname.
        </Text>

        <Heading>Mobs</Heading>
        <Text>
          All mobs have a chance to drop their own head as an item. These chances can be increased with the <b>Looting</b> enchantment.
        </Text>
        <Text>Shulkers will always drop 2 Shulker Shells.</Text>
        <Text>You can trade with Wandering Villagers to get Mini Blocks.</Text>
        <Text>Phantoms will not spawn.</Text>
      </Grid>
    </ArticleLayout>
  );
}

export default Gameplay;
