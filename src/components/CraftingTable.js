/** @jsxImportSource @theme-ui/core */
import { Grid, Text } from "@theme-ui/components";

import MinecraftContainer from "./MinecraftContainer";
import MinecraftSlot from "./MinecraftSlot";
import MinecraftResultSlot from "./MinecraftResultSlot";
import MinecraftResultArrow from "./MinecraftResultArrow";

function CraftingTable({ input, result, amount }) {
  return (
    <MinecraftContainer>
      <Text sx={{ mb: 1 }}>Crafting</Text>
      <div
        sx={{
          display: "inline-flex",

          alignItems: "center",
        }}
      >
        <Grid columns="repeat(3, 36px)" gap={0}>
          {input.map((item, index) => {
            return <MinecraftSlot image={item[1]} name={item[0]} />;
          })}
        </Grid>

        <MinecraftResultArrow />

        <MinecraftResultSlot
          name={result[0]}
          image={result[1]}
          amount={amount}
        />
      </div>
    </MinecraftContainer>
  );
}

CraftingTable.defaultProps = {
  input: [false],
  result: false,
  amount: null,
};

export default CraftingTable;
