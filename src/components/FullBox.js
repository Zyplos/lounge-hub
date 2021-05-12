/** @jsxImportSource @theme-ui/core */

function FullBox({ useDims, ...props }) {
  return (
    <div
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: useDims ? "100vh" : "none",
        maxHeight: useDims ? "100vh" : "none",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {props.children}
    </div>
  );
}

export default FullBox;