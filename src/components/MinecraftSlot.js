/** @jsxImportSource @theme-ui/core */
import { useColorMode } from "@theme-ui/color-modes";

function MinecraftSlot(props) {
  const [colorMode] = useColorMode();
  const styles = {
    display: "inline-block",
    width: "32px",
    height: "32px",
    backgroundColor: colorMode === "dark" ? "#0e0e0e" : "#8B8B8B",
    border: colorMode === "dark" ? "2px solid #080808" : "2px solid #373737",
    borderRightColor: colorMode === "dark" ? "#585858" : "#FFF",
    borderBottomColor: colorMode === "dark" ? "#585858" : "#FFF",
  };

  return (
    <span {...props} sx={styles}>
      {props.children}
    </span>
  );
}

export default MinecraftSlot;
