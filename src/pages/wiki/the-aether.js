/** @jsxImportSource theme-ui */
import { Heading, Grid, Text } from "theme-ui";
import Image from "next/image";
import aether from "../../assets/the-aether-screenshot.png";
import enchantedForest from "../../assets/the-aether-enchanted-screenshot.png";
import ArticleLayout from "../../internals/ArticleLayout";
function TheAether() {
  return (
    <ArticleLayout title="The Aether">
      <Grid>
        <Image src={aether} alt="The Aether with a portal" layout="responsive" />
        <Text>
          Everyone's favorite sky dimension is now available to explore in vanilla Minecraft! Explore some familiar looking biomes once you've gathered enough glowstone.
        </Text>

        <Text>Sleeping is allowed in The Aether! Set a bed down and your spawn point will be set in The Aether.</Text>

        <Heading>Portal</Heading>
        <Text>
          Getting to The Aether requires <b>14 Glowstone Blocks</b>. They can be made like any Nether Portal. Light up the portal by right clicking the portal with a{" "}
          <b>Water Bucket</b>. Note: You can only build an Aether Portal above Y:90.
        </Text>
        <Text>Aether Portal traveling is different from Nether Portal traveling. The portal coordinates will be the exact same in The Overworld and The Aether.</Text>

        <Image src={enchantedForest} alt="Enchanted Highlands in the Aether" layout="responsive" />
        <Text variant="muted" mx="auto">
          A somewhat rare biome in The Aether.
        </Text>
      </Grid>
    </ArticleLayout>
  );
}

export default TheAether;