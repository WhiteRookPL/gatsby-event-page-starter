import React from "react";

import { Paper } from "../components/content";
import { renderAst } from "../components/markdown-components";

export default ({ data }) => {
  const { page } = data;

  return (
    <Paper>
      {renderAst(page.htmlAst)}
    </Paper>
  );
};

export const query = graphql`
  query IndexPageQuery {
    page : markdownRemark(fields: { slug: { eq: "/" } }) {
      htmlAst
    }

    mostRecentEvent : allMarkdownRemark(
      limit: 1
      filter: { fields: { type: { eq: "events" } } }
      sort: { order: DESC, fields: [ frontmatter___date ] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
