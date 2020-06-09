/** @jsx jsx **/
import { jsx } from "@theme-ui/core";

export default (props) => {
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
};
