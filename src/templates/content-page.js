import React from "react";

import { Paper } from "../components/content";
import { renderAst } from "../components/markdown-components";

export default ({ data }) => {
  const post = data.page;

  return (
    <Paper centered={post.frontmatter.centered}>
      {renderAst(post.htmlAst)}
    </Paper>
  );
};

export const query = graphql`
  query ContentPageQuery($slug: String!) {
    page : markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        centered
      }
    }
  }
`;
