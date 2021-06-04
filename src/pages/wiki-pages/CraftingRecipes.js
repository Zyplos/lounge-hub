/** @jsxImportSource theme-ui */
import { Heading, Grid, Text } from "theme-ui";

import CraftingTable from "../../components/CraftingTable";
import Stonecutter from "../../components/Stonecutter";
import Furnace from "../../components/Furnace";

import recipes from "../../internals/recipes";

function CraftingRecipes() {
  return (
    <Grid>
      <Heading as="h1">Crafting Recipes</Heading>
      <Text>
        The server has a few quality of life crafting recipes that should make
        obtaining stuff a bit easier.
      </Text>

      <Grid
        sx={{
          gridTemplateColumns: [
            "repeat(auto-fill, minmax(250px, 1fr) )",
            "repeat(auto-fill, minmax(320px, 1fr) )",
          ],
          gridAutoRows: "1fr",
        }}
      >
        {recipes.map((recipe, index) => {
          const { type, input, result } = recipe;
          const amount = result[2];
          if (type === "crafting") {
            return (
              <CraftingTable
                key={index}
                input={input}
                result={result}
                amount={amount}
              />
            );
          } else if (type === "furnace") {
            return (
              <Furnace
                key={index}
                input={input}
                result={result}
                amount={amount}
              />
            );
          } else if (type === "smoker") {
            return (
              <Furnace
                key={index}
                input={input}
                result={result}
                amount={amount}
                type="Smoker"
              />
            );
          } else if (type === "blasting") {
            return (
              <Furnace
                key={index}
                input={input}
                result={result}
                amount={amount}
                type="Blast Furnace"
              />
            );
          } else if (type === "stonecutter") {
            return (
              <Stonecutter
                key={index}
                input={input}
                result={result}
                amount={amount}
              />
            );
          } else {
            return <p>broken recipe</p>;
          }
        })}
      </Grid>
    </Grid>
  );
}

export default CraftingRecipes;
