import React from "react";
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
              <details key={e} open={i === 0 ? true : false}>
                <summary>{e}</summary>
                {byYear[e].map(item => (
                  <Link
                    key={item}
                    to={`/${
                      item.node.fileAbsolutePath
                        .split("/blog/")[1]
                        .split("/")[0]
                    }`}
                  >
                    {item.node.frontmatter.title}
                  </Link>
                ))}
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
// {posts.map(({ node }) => (
//   <details open>
//     <summary>2018</summary>
//     <Link to="/oregontrip">{node.frontmatter.title}</Link>
//   </details>
// ))}
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
