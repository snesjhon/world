import React from "react";
import { Flex, Box, Text } from "rebass";
import { Link } from "gatsby";
import Head from "./Head";
import "../../node_modules/github-markdown-css/github-markdown.css";

const BlogLayout = ({ children, pageContext }) => (
  <>
    <Head title={pageContext.frontmatter.title} />
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
      <Flex
        pt={3}
        mt={4}
        justifyContent="space-between"
        sx={{ borderTop: "1px solid #eaecef" }}
      >
        <Box>
          <Text fontSize={1}>Jhon Paredes</Text>
        </Box>
        <Box>
          <Text fontSize={1}>
            {new Date(pageContext.frontmatter.date).toLocaleDateString()}
          </Text>
        </Box>
      </Flex>
    </Box>
  </>
);

export default BlogLayout;
