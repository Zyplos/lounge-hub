/** @jsxImportSource @theme-ui/core */

function FullBox(props) {
  return (
    <div
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: props.useDims ? "100vh" : "none",
        maxHeight: props.useDims ? "100vh" : "none",
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
