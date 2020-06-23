/** @jsx jsx **/
import React from "react";
import { Flex, Heading, Text } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import { Link } from "react-router-dom";
export default ({ link, image, gradient, heading, description }) => (
  <Link
    to={link}
    sx={{ display: "block", color: "white", textDecoration: "none" }}
  >
    <Flex
      sx={{
        flexDirection: "row",
        background: `linear-gradient( 135deg, ${gradient.left} 10%, ${gradient.right} 100%)`,
        px: 4,
        py: 3,
        alignItems: "center",
        height: "100%",
        borderRadius: "10px",
        flexWrap: "wrap",
      }}
    >
      <img src={image} alt={heading} sx={{ height: "128px", mr: 3 }} />
      <div>
        <Heading as="h2" sx={{ fontSize: 5, mb: 2 }}>
          {heading}
        </Heading>
        <Text>{description}</Text>
      </div>
    </Flex>
  </Link>
);
