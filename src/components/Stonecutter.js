/** @jsxImportSource @theme-ui/core */
import { Heading, Grid, Flex, Image, Text } from "@theme-ui/components";
import { useColorMode } from "@theme-ui/color-modes";

import Navbar from "../components/Navbar";
import MinecraftStatus from "../components/MinecraftStatus";

import itemImage from "../assets/items/barrier.png";
import arrowImage from "../assets/arrow.png";
import MinecraftContainer from "./MinecraftContainer";
import MinecraftSlot from "./MinecraftSlot";

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
        {input && (
          <MinecraftSlot>
            <img src={input[1]} alt={input[0]} sx={{ width: "32px" }} />
          </MinecraftSlot>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.93 62"
          sx={{
            width: "50px",
            mx: 3,
            fill: colorMode === "dark" ? "#080808" : "#8b8b8b",
          }}
        >
          <polygon points="86.8 28.93 86.8 24.8 82.67 24.8 82.67 20.67 78.53 20.67 78.53 16.53 74.4 16.53 74.4 12.4 70.27 12.4 70.27 8.27 66.13 8.27 66.13 4.13 62 4.13 62 0 57.87 0 57.87 24.8 0 24.8 0 37.2 57.87 37.2 57.87 62 62 62 62 57.87 66.13 57.87 66.13 53.73 70.27 53.73 70.27 49.6 74.4 49.6 74.4 45.47 78.53 45.47 78.53 41.33 82.67 41.33 82.67 37.2 86.8 37.2 86.8 33.07 90.93 33.07 90.93 28.93 86.8 28.93" />
        </svg>
        <span
          sx={{
            border:
              colorMode === "dark" ? "2px solid #080808" : "2px solid #373737",
            height: "56px",
          }}
        >
          <MinecraftSlot
            sx={{
              width: "52px",
              height: "52px",
              position: "relative",
              backgroundColor: "#a09172",
              border: "2px solid #e0ca9f",
              borderRightColor: "#544c3b",
              borderBottomColor: "#544c3b",
            }}
          >
            {result && (
              <img
                src={result[1]}
                alt={result[0]}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "32px",
                }}
              />
            )}
          </MinecraftSlot>
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
