import React from "react";
import { Box } from "rebass";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const BlogsContainer = styled(Box)`
  & summary {
    outline: none;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AllQuery {
        allMdx(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                sortDate: date(formatString: "YYYY")
                date: date(formatString: "MMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMdx.edges;
      const byYear = posts.reduce((a, c) => {
        if (a[c.node.frontmatter.sortDate]) {
          a[c.node.frontmatter.sortDate].push(c);
        } else {
          a[c.node.frontmatter.sortDate] = [c];
        }
        return a;
      }, {});
      return (
        <>
          {Object.keys(byYear)
            .reverse()
            .map((e, i) => (
              <BlogsContainer key={e} mb={3}>
                <details key={e + i} open={i === 0 ? true : false}>
                  <summary>{e}</summary>
                  {byYear[e].map(item => (
                    <Box mt={1} mb={2} key={item.node.frontmatter.title}>
                      <Link
                        to={`/${item.node.fileAbsolutePath
                          .split("/blog/")[1]
                          .split("/")[0]
                          .replace(".mdx", "")}`}
                      >
                        {item.node.frontmatter.title}
                      </Link>
                    </Box>
                  ))}
                </details>
              </BlogsContainer>
            ))}
        </>
      );
    }}
  />
);

export default Layout;
