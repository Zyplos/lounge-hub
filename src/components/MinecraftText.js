/** @jsxImportSource @theme-ui/core */

function MinecraftText(props) {
  return (
    <span
      sx={{
        fontFamily: "Minecraft, monospace",
      }}
    >
      {props.children}
    </span>
  );
}

export default MinecraftText;
