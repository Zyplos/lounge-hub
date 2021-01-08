/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

function Fullbox(props) {
  return (
    <div
      {...props}
      css={{
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

export default Fullbox;
