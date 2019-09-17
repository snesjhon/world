import React from "react";
import { Box, Text } from "rebass";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
// import styled from "styled-components";
import "../../node_modules/github-markdown-css/github-markdown.css";

// const BlogContainer = styled(Box)`
//   & img {
//     margin: 0 -1rem;
//   }
// `;

// const BackContainer = styled.div`
//   position: absolute;
// `;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        mdx {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    `}
    render={data => (
      <>
        <Box
          className="markdown-body"
          maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
          mx="auto"
          my={4}
          p={4}
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
            {data.mdx.frontmatter.title}
          </Text>
          {children}
          <Text fontSize={1}>{data.mdx.frontmatter.date}</Text>
        </Box>
      </>
    )}
  />
);

export default Layout;
