import React from "react";
import { Heading, Divider, Container } from "theme-ui";

function ArticleLayout({ title, children }) {
  return (
    <React.Fragment>
      <Container>
        <Heading as="h1">{title}</Heading>
        <Divider my={4} />
        {children}
      </Container>
    </React.Fragment>
  );
}

export default ArticleLayout;
