/** @jsxImportSource theme-ui */
import MainLayout from "../internals/MainLayout";
import { Heading, Button } from "theme-ui";
import FullBox from "../components/FullBox";

function Error() {
  return (
    <MainLayout noPadding>
      <FullBox useDims={true}>
        <Heading as="h1">404</Heading>
        <p>Whatever you tried to access doesn't exist.</p>
      </FullBox>
    </MainLayout>
  );
}

export default Error;
