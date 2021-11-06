/** @jsxImportSource theme-ui */

function FullBox({ useDims, usePadding, ...props }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: useDims ? "100vh" : "auto",
        maxHeight: useDims ? "100vh" : "none",
        padding: usePadding ? "2em" : 0,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default FullBox;
