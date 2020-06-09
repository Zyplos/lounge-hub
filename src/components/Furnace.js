/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex, Image, Text } from "@theme-ui/components";
import { useColorMode } from "@theme-ui/color-modes";

import coalImage from "../assets/items/coal.png";
import MinecraftContainer from "./MinecraftContainer";
import MinecraftSlot from "./MinecraftSlot";

function Furnace({ input, result, type }) {
  const [colorMode] = useColorMode();
  const gridStyles = {
    display: "inline-block",
    width: "32px",
    height: "32px",
    backgroundColor: "#8B8B8B",
    border: "2px solid #373737",
    borderRightColor: "#FFF",
    borderBottomColor: "#FFF",
  };

  return (
    <MinecraftContainer>
      <Text sx={{ mb: 1 }}>{type}</Text>
      <div
        sx={{
          display: "inline-flex",

          alignItems: "center",
        }}
      >
        <Grid gap={2} sx={{ justifyItems: "center" }}>
          {input && (
            <MinecraftSlot>
              <img src={input[1]} alt={input[0]} sx={{ width: "32px" }} />
            </MinecraftSlot>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
            sx={{
              width: "25px",
              height: "25px",
              fill: colorMode === "dark" ? "#080808" : "#8b8b8b",
            }}
          >
            <rect x="6.92" width="6.92" height="13.85" />
            <polygon points="20.77 48.46 20.77 13.85 13.85 13.85 13.85 27.69 6.92 27.69 6.92 41.54 0 41.54 0 69.23 6.92 69.23 6.92 83.08 0 83.08 0 90 6.92 90 13.85 90 20.77 90 20.77 62.31 13.85 62.31 13.85 48.46 20.77 48.46" />
            <rect x="41.54" y="13.85" width="6.92" height="13.85" />
            <polygon points="55.38 62.31 55.38 27.69 48.46 27.69 48.46 41.54 41.54 41.54 41.54 55.38 34.62 55.38 34.62 90 41.54 90 48.46 90 55.38 90 55.38 76.15 48.46 76.15 48.46 62.31 55.38 62.31" />
            <rect x="76.15" width="6.92" height="13.85" />
            <polygon points="90 69.23 90 41.54 83.08 41.54 83.08 27.69 76.15 27.69 76.15 13.85 69.23 13.85 69.23 48.46 76.15 48.46 76.15 62.31 69.23 62.31 69.23 90 76.15 90 83.08 90 90 90 90 83.08 83.08 83.08 83.08 69.23 90 69.23" />
          </svg>
          <MinecraftSlot>
            <img src={coalImage} alt="Fuel" />
          </MinecraftSlot>
        </Grid>
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

        <MinecraftSlot
          sx={{ width: "52px", height: "52px", position: "relative" }}
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
      </div>
    </MinecraftContainer>
  );
}

Furnace.defaultProps = {
  type: "Furnace",
  input: [false],
  result: false,
};

export default Furnace;
