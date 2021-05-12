/** @jsxImportSource @theme-ui/core */
import { useColorMode } from "@theme-ui/color-modes";
import { Text } from "@theme-ui/components";

function MinecraftSlot({ name, image, amount, type = "normal", ...props }) {
  const [colorMode] = useColorMode();
  const squareDimensions = type === "normal" ? "32px" : "52px";
  let styles = {
    display: "inline-block",
    width: squareDimensions,
    height: squareDimensions,
    backgroundColor: colorMode === "dark" ? "#0e0e0e" : "#8B8B8B",
    border: colorMode === "dark" ? "2px solid #080808" : "2px solid #373737",
    borderRightColor: colorMode === "dark" ? "#585858" : "#FFF",
    borderBottomColor: colorMode === "dark" ? "#585858" : "#FFF",
    position: "relative",
  };

  const stonecutterStyles = {
    backgroundColor: "#a09172",
    border: "2px solid #e0ca9f",
    borderRightColor: "#544c3b",
    borderBottomColor: "#544c3b",
  };

  if (type === "stonecutter") styles = { ...styles, ...stonecutterStyles };

  return (
    <span {...props} sx={styles}>
      {name && image && (
        <img
          src={image}
          alt={name}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "32px",
          }}
        />
      )}

      {amount > 1 && (
        <Text
          sx={{
            color: "white",
            position: "absolute",
            bottom: "5px",
            right: "5px",
          }}
        >
          {amount}
        </Text>
      )}
    </span>
  );
}

export default MinecraftSlot;
