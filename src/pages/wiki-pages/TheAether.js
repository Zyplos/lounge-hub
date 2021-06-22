/** @jsxImportSource theme-ui */
import { Heading, Grid, Text, Image } from "theme-ui";

import aether from "../../assets/the-aether-screenshot.png";
import enchantedForest from "../../assets/the-aether-enchanted-screenshot.png";
import ArticleLayout from "../../internals/ArticleLayout";
function TheAether() {
  return (
    <ArticleLayout title="The Aether">
      <Grid>
        <Image
          src={aether}
          alt="The Aether with a portal"
          sx={{ width: "1000px", mx: "auto" }}
        />
        <Text>
          Everyone's favorite sky dimension is now available to explore in
          vanilla Minecraft! Explore some familiar looking biomes once you've
          gathered enough glowstone.
        </Text>

        <Text>
          Sleeping is allowed in The Aether! Set a bed down and your spawn point
          will be set in The Aether.
        </Text>

        <Heading>Portal</Heading>
        <Text>
          Getting to The Aether requires <b>14 Glowstone Blocks</b>. They must
          be arranged the classic Nether Portal way (4x5, the corners must be
          filled in too). Light up the portal by right clicking the portal with
          a <b>Water Bucket</b>.
        </Text>
        <Text>
          Aether Portal traveling is different from Nether Portal traveling. The
          portal coordinates will be the exact same in The Overworld and The
          Aether.
        </Text>

        <Image
          src={enchantedForest}
          alt="Enchanted Highlands in the Aether"
          sx={{ width: "1000px", mx: "auto" }}
        />
        <Text variant="muted" mx="auto">
          A somewhat rare biome in The Aether.
        </Text>
      </Grid>
    </ArticleLayout>
  );
}

export default TheAether;
