/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Heading, Grid, Flex } from "@theme-ui/components";

import WikiLayout from "../layouts/WikiLayout";

function Wiki() {
  return (
    <WikiLayout>
      <Heading as="h1">wiki</Heading>
      <p>
        Welcome to the lounge's Minecraft wiki. We've got a number of custom
        stuff added to our server, so a wiki now exists to document it all.
      </p>
    </WikiLayout>
  );
}

export default Wiki;
