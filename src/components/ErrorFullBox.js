/** @jsxImportSource theme-ui */

import { Text } from "@theme-ui/components";
import FullBox from "./FullBox";

function ErrorFullBox({ header, text, ...props }) {
  return (
    <FullBox useDims usePadding>
      <Text variant="fullbox">{header}</Text>
      <Text>{text}</Text>
    </FullBox>
  );
}

export default ErrorFullBox;
