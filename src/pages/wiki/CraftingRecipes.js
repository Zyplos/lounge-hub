/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex } from "@theme-ui/components";

import CraftingTable from "../../components/CraftingTable";
import Stonecutter from "../../components/Stonecutter";
import Furnace from "../../components/Furnace";

import WikiLayout from "../../layouts/WikiLayout";

import recipes from "../../internals/recipes";

function CraftingRecipes() {
  return (
    <WikiLayout>
      <Heading as="h1">Crafting Recipes</Heading>
      <p>
        The server has a few custom crafting recipes that serve as quality of
        life stuff.
      </p>

      <Grid
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr) )",
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
    </WikiLayout>
  );
}

export default CraftingRecipes;
