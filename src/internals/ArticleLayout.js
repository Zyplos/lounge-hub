import React from "react";
import { Heading, Divider, Container } from "theme-ui";
import MainLayout from "./MainLayout";

function ArticleLayout({ title, children }) {
  return (
    <MainLayout>
      <Container>
        <Heading as="h1">{title}</Heading>
        <Divider my={4} />
        {children}
      </Container>
    </MainLayout>
  );
}

export default ArticleLayout;
