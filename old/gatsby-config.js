const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Jhon Paredes"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          }
        ],
        defaultLayouts: {
          default: path.resolve("./src/components/MainLayout.js"),
          blog: path.resolve("./src/components/BlogLayout.js")
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          }
        ]
      }
    }
  ]
};
