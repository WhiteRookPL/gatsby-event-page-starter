import React from "react";
import { withPrefix } from "gatsby-link";

import { Paper } from "../components/content";
import { renderAst } from "../components/markdown-components";

const passPropsToComponentsFromMarkup = function passPropsToComponentsFromMarkup (ast, props) {
  const { url, event, googleRecaptchaSiteKey, facebookAppId } = props;

  ast.children.forEach(subAst => {
    switch (subAst.tagName) {
      case `event-details`:
        subAst.properties.event = JSON.stringify(event);
        break;

      case `social-buttons`:
        subAst.properties.event = JSON.stringify(event);
        subAst.properties.url = url;
        break;

      case `facebook-comments`:
        subAst.properties.appId = facebookAppId;
        break;

      case `contact-form`:
        subAst.properties.googleRecaptchaSiteKey = googleRecaptchaSiteKey;
        break;

      default:
        if (subAst.type === `element`) {
          passPropsToComponentsFromMarkup(subAst, props);
        }
        break;
    }
  });

  return ast;
};

export default ({ data, location }) => {
  const { page, mostRecentEvent } = data;
  const { googleRecaptchaSiteKey, siteUrl, facebookAppId } = data.site.siteMetadata;

  const pathname = withPrefix(location.pathname);
  const url = `${siteUrl}${pathname}`;

  const event = mostRecentEvent.edges[0].node;
  const props = {
    url,
    event,
    googleRecaptchaSiteKey,
    facebookAppId,
  };

  return (
    <Paper>
      {renderAst(passPropsToComponentsFromMarkup(page.htmlAst, props))}
    </Paper>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        siteUrl
        facebookAppId
        googleRecaptchaSiteKey
      }
    }

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
          htmlAst
          frontmatter {
            title
            date
            tags
            where {
              location {
                lat
                lng
              }
              link
              name
            }
          }
        }
      }
    }
  }
`;
