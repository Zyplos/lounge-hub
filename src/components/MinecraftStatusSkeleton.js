/** @jsxImportSource theme-ui */
import { Flex, Grid } from "theme-ui";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({ from: { opacity: 0.5 }, to: { opacity: 1 } });

const aniData = {
  animation: `${fadeIn} 1s ease alternate infinite`,
  backgroundColor: "white",
};

function MinecraftStatusSkeleton(props) {
  return (
    <Grid>
      <Flex sx={{ flexDirection: "row" }}>
        <div>
          <div
            sx={{
              width: "64px",
              height: "64px",
              mr: 3,
              ...aniData,
            }}
          ></div>
        </div>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Minecraft, monospace",
          }}
        >
          <div>
            <div
              sx={{
                height: (theme) => theme.fontSizes[2] + "px",
                width: "180px",
                backgroundColor: "white",
                mb: 2,
                ...aniData,
              }}
            ></div>
            <div
              sx={{
                height: (theme) => theme.fontSizes[2] + "px",
                width: "260px",
                backgroundColor: "white",
                ...aniData,
              }}
            ></div>
          </div>
        </Flex>
      </Flex>
      <div
        sx={{
          height: (theme) => theme.fontSizes[2] + "px",
          width: "260px",
          backgroundColor: "white",
          ...aniData,
        }}
      ></div>
      <Grid sx={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            m: 0,
            flexWrap: "wrap",
          }}
        >
          <div
            sx={{
              width: "45px",
              height: "45px",
              backgroundColor: "white",
              mb: 1,
              ...aniData,
            }}
          ></div>

          <div
            sx={{
              height: (theme) => theme.fontSizes[2] + "px",
              width: "80px",
              backgroundColor: "white",
              ...aniData,
            }}
          ></div>
        </Flex>
      </Grid>
    </Grid>
  );
}

export default MinecraftStatusSkeleton;
