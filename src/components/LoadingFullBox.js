/** @jsxImportSource theme-ui */

import { Spinner } from "@theme-ui/components";
import FullBox from "./FullBox";

function LoadingFullBox({ text, ...props }) {
  return (
    <FullBox useDims>
      <Spinner title={text} size={200} />
      {text}
    </FullBox>
  );
}

export default LoadingFullBox;
