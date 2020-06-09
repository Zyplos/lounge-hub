/** @jsx jsx **/
import FullScreenBox from "../components/FullScreenBox";
import { jsx } from "@theme-ui/core";
import { Text } from "@theme-ui/components";

function HomePage(props) {
  return (
    <FullScreenBox {...props}>
      <Text variant="fullbox">404</Text>
      <Text>Whatever you just tried to access doesn't exist.</Text>
    </FullScreenBox>
  );
}

export default HomePage;
