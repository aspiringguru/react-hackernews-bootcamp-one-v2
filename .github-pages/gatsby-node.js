/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const chapter = path.resolve(`src/templates/chapter.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: {
        order: ASC,
        fields: [frontmatter___index]
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      boundActionCreators.createPage({
        path: node.frontmatter.path,
        component: chapter,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
