/** @jsxImportSource theme-ui */
import { Heading, Grid, Text, Badge } from "theme-ui";
import SmallCardGrid from "../../components/SmallCardGrid";
import ArticleLayout from "../../internals/ArticleLayout";

const SmallerCardGrid = ({ ...props }) => <SmallCardGrid width="200px" {...props} />;

function Changelog() {
  return (
    <ArticleLayout title="Server History">
      <Grid>
        <Heading>Vanilla Minecraft</Heading>
        <SmallerCardGrid>
          <div>
            <Heading>Season 5: Part II</Heading>
            <Text>
              1.18 <Badge>Current</Badge>
            </Text>
          </div>
          <div>
            <Heading>Season 5</Heading>
            <Text>1.17</Text>
          </div>
          <div>
            <Heading>Season 4</Heading>
            <Text>1.16</Text>
          </div>
          <div>
            <Heading>Season 3</Heading>
            <Text>1.14 / 1.15</Text>
          </div>
          <div>
            <Heading>Season 2</Heading>
            <Text>1.13</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>1.13</Text>
          </div>
        </SmallerCardGrid>

        <Heading>Modded Minecraft</Heading>
        <SmallerCardGrid>
          <div>
            <Heading>Season 8</Heading>
            <Text>lounge S8 pack</Text>
          </div>
          <div>
            <Heading>Season 7</Heading>
            <Text>Vanilla & Sprinkles</Text>
          </div>
          <div>
            <Heading>Season 6</Heading>
            <Text>Enigmatica 2</Text>
          </div>
          <div>
            <Heading>Season 5</Heading>
            <Text>Tekxit</Text>
          </div>
          <div>
            <Heading>Season 4</Heading>
            <Text>Enigmatica 2</Text>
          </div>
          <div>
            <Heading>Season 3</Heading>
            <Text>Skyfactory</Text>
          </div>
          <div>
            <Heading>Season 2</Heading>
            <Text>Pixelmon</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>zy & co.'s modpack</Text>
          </div>
        </SmallerCardGrid>

        <Heading>Terraria</Heading>
        <SmallerCardGrid>
          <div>
            <Heading>Season 2</Heading>
            <Text>Journey's End</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>1.3</Text>
          </div>
        </SmallerCardGrid>
      </Grid>
    </ArticleLayout>
  );
}
export default Changelog;
