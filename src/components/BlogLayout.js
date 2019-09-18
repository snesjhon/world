import React from "react";
import { Box, Text } from "rebass";
import { Link } from "gatsby";
import "../../node_modules/github-markdown-css/github-markdown.css";

const Layout = ({ children, pageContext }) => (
  <Box
    className="markdown-body"
    maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
    mx="auto"
    my={2}
    p={3}
    sx={{
      border: "1px solid #d1d5da",
      borderRadius: "3px",
      position: "relative"
    }}
  >
    <Text fontSize={1}>
      <Link to="/">Home</Link> / Blog
    </Text>
    <Text
      fontSize={5}
      fontWeight="600"
      sx={{ borderBottom: "1px solid #eaecef" }}
      mb={3}
    >
      {pageContext.frontmatter.title}
    </Text>
    {children}
    <Text fontSize={1}>{pageContext.frontmatter.date}</Text>
  </Box>
);

export default Layout;
