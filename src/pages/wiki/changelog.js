/** @jsxImportSource theme-ui */
import { Heading, Grid, Text, Badge, Alert } from "theme-ui";
import SmallCardGrid from "../../components/SmallCardGrid";
import ArticleLayout from "../../internals/ArticleLayout";

const SmallerCardGrid = ({ ...props }) => <SmallCardGrid width="300px" {...props} />;
const EvenSmallerCardGrid = ({ ...props }) => <SmallCardGrid width="200px" {...props} />;
const FastLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

function Changelog() {
  return (
    <ArticleLayout title="Server History">
      <Alert variant="info" sx={{ my: 4 }}>
        i'll add world backups here sometime soon
      </Alert>
      <Grid>
        <Heading>Vanilla Minecraft</Heading>
        <SmallerCardGrid>
          <div>
            <Heading>Season 6: Echoes of the Realm</Heading>
            <Text>
              1.20 <Badge>Current</Badge>
            </Text>
          </div>
          <div>
            <Heading>Season 6</Heading>
            <Text>1.19</Text>
          </div>
          <div>
            <Heading>Season 5: Part II</Heading>
            <Text>1.18</Text>
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
        <EvenSmallerCardGrid>
          <div>
            <Heading>Season 11</Heading>
            <Text>
              <FastLink href="https://www.technicpack.net/modpack/tekkit-2.1935271">Tekkit 2</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 10</Heading>
            <Text>
              <FastLink href="https://drive.google.com/file/d/1mCPLbVJsjIM4IAEw-DVUjf7f1W8ELgzS/view?usp=sharing">kedr's FUNNY TIME FABRIC</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 9</Heading>
            <Text>
              <FastLink href="https://drive.google.com/file/d/1KaJf4n3wM_kOl0tj3boYhkBCYNTbAQAd/view?usp=sharing">ratpack</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 8</Heading>
            <Text>
              <FastLink href="https://drive.google.com/file/d/1-4UWqfbF16rS649tSf9EG3SrYNPsHJuG/view?usp=sharing">julian's lounge pack</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 7</Heading>
            <Text>
              <FastLink href="https://www.technicpack.net/modpack/vanilla-sprinkles-modpack.1780181">Vanilla & Sprinkles</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 6</Heading>
            <FastLink href="https://www.curseforge.com/minecraft/modpacks/enigmatica2">Enigmatica 2</FastLink>
          </div>
          <div>
            <Heading>Season 5</Heading>
            <Text>
              <FastLink href="https://www.technicpack.net/modpack/tekxit-3-official-1122.1253751">Tekxit 3</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 4</Heading>
            <Text>
              <FastLink href="https://www.curseforge.com/minecraft/modpacks/enigmatica2">Enigmatica 2</FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 3</Heading>
            <Text>
              <FastLink href="https://www.curseforge.com/minecraft/modpacks/skyfactory-4" target="_blank" rel="noreferrer">
                SkyFactory 4
              </FastLink>
            </Text>
          </div>
          <div>
            <Heading>Season 2</Heading>
            <Text>Pixelmon</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>
              <FastLink href="https://www.technicpack.net/modpack/zy-cos-modpack.1260752">zy & co.'s modpack</FastLink>
            </Text>
          </div>
        </EvenSmallerCardGrid>

        <Heading>Terraria</Heading>
        <EvenSmallerCardGrid>
          <div>
            <Heading>Season 2</Heading>
            <Text>Journey's End</Text>
          </div>
          <div>
            <Heading>Season 1</Heading>
            <Text>1.3</Text>
          </div>
        </EvenSmallerCardGrid>
      </Grid>
    </ArticleLayout>
  );
}
export default Changelog;
