/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Text } from "@theme-ui/components";

import CraftingTable from "../../components/CraftingTable";
import Stonecutter from "../../components/Stonecutter";
import Furnace from "../../components/Furnace";

import MainLayout from "../../layouts/MainLayout";

import recipes from "../../internals/recipes";

import dyeItem from "../../assets/items/dye.gif";
import woolItem from "../../assets/items/wool.gif";
import whiteWoolItem from "../../assets/items/white_wool.png";

function CraftingRecipes() {
  return (
    <MainLayout>
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
        <Heading>Redye Recipes</Heading>
        <div sx={{ display: "flex" }}>
          <CraftingTable
            input={[
              false,
              false,
              false,

              ["White Wool", whiteWoolItem],
              ["Any Dye", dyeItem],
              false,

              false,
              false,
              false,
            ]}
            result={["Dyed Wool", woolItem]}
          />
        </div>
        <Text>
          Note: Anything that can be dyed can be redyed with their respective
          recipes.
        </Text>
      </Grid>
    </MainLayout>
  );
}

export default CraftingRecipes;
