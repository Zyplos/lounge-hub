/** @jsxImportSource theme-ui */
import { useColorMode, Text } from "theme-ui";

import MinecraftContainer from "./MinecraftContainer";
import MinecraftSlot from "./MinecraftSlot";
import MinecraftResultSlot from "./MinecraftResultSlot";
import MinecraftResultArrow from "./MinecraftResultArrow";

function Stonecutter({ input, result }) {
  const [colorMode] = useColorMode();

  return (
    <MinecraftContainer>
      <Text sx={{ mb: 1 }}>Stonecutter</Text>
      <div
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {input && <MinecraftSlot image={input[1]} name={input[0]} />}

        <MinecraftResultArrow />

        <span
          sx={{
            border:
              colorMode === "dark" ? "2px solid #080808" : "2px solid #373737",
            height: "56px",
            boxSizing: "content-box",
          }}
        >
          <MinecraftResultSlot
            name={result[0]}
            image={result[1]}
            type="stonecutter"
          />
        </span>
      </div>
    </MinecraftContainer>
  );
}

Stonecutter.defaultProps = {
  recipe: [false],
  result: false,
};

export default Stonecutter;
