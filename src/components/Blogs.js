import React from "react";
import { Box, Text } from "rebass";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AllQuery {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                sortDate: date(formatString: "MMMM YYYY")
                date: date(formatString: "MMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMdx.edges;

      return (
        <>
          {posts.map(({ node }) => (
            <details open>
              <summary> December 2018</summary>
              <Link to="/oregontrip">{node.frontmatter.title}</Link>
            </details>
          ))}
        </>
      );
    }}
  />
);

export default Layout;

// <Box
//   className="markdown-body"
//   maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
//   mx="auto"
//   my={4}
//   p={4}
//   sx={{
//     border: "1px solid #d1d5da",
//     borderRadius: "3px",
//     position: "relative"
//   }}
// >
//   <Text fontSize={1}>
//     <Link to="/">Home</Link> / Blog
//   </Text>
//   <Text
//     fontSize={5}
//     fontWeight="600"
//     sx={{ borderBottom: "1px solid #eaecef" }}
//     mb={3}
//   >
//     {data.mdx.frontmatter.title}
//   </Text>
//   {children}
//   <Text fontSize={1}>{data.mdx.frontmatter.date}</Text>
// </Box>
