/** @jsxImportSource theme-ui */
import MainLayout from "../internals/MainLayout";
import { Heading, Button } from "theme-ui";
import FullBox from "../components/FullBox";

function Error({ statusCode }) {
  return (
    <MainLayout noPadding>
      <FullBox useDims={true}>
        <Heading as="h1">oops</Heading>
        <p>{statusCode ? `An error ${statusCode} occurred on the server` : "An error occurred on client"}</p>
      </FullBox>
    </MainLayout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
