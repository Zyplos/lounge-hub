import { Grid, Text, Alert, Heading } from "theme-ui";
import MinecraftText from "../../components/MinecraftText";
import ArticleLayout from "../../internals/ArticleLayout";

function LandClaiming() {
  return (
    <ArticleLayout title="Land Claiming">
      <Grid>
        <Alert>
          This page is currently under development for Season 5 (1.17).
        </Alert>
        <Text>
          Chunks in the world can be claimed by players. Typing{" "}
          <MinecraftText>/claim</MinecraftText> will make the chunk you're
          standing in yours. This will be shown on your public profile, so don't
          claim chunks that have things you want to keep secret.
        </Text>
        <Text>
          People who walk into your owned chunk will be shown a message above
          their hotbar telling that they are walking in someone's territory.
        </Text>
        <Text>
          When players walk into a claimed chunk, their visit is recorded. Check
          who recently walked through your claim by doing{" "}
          <MinecraftText>/visitorslog</MinecraftText> Ingame, this will show the
          last 10 visits. You'll have the view the visitor's log online if you
          want to see all visits.
        </Text>
        <Text>
          Only one person can hold a claim to a chunk. If you no longer need a
          chunk, or claimed the wrong one, you can unclaim it by doing{" "}
          <MinecraftText>/unclaim</MinecraftText>.
        </Text>

        <Heading>Player Homes</Heading>
        <Text>
          The server has a <MinecraftText>/sethome</MinecraftText> command that
          will set your player home to the location where you're standing. Doing{" "}
          <MinecraftText>/home</MinecraftText> will not teleport you to your set
          home however. Instead it will send you your home coordinates for you
          to reference. Players are encouraged to create travel systems that
          span the world.
        </Text>
        <Text>
          The home you set is visibile on your public profile, so don't set it
          somewhere you want to keep secret!
        </Text>
      </Grid>
    </ArticleLayout>
  );
}

export default LandClaiming;
