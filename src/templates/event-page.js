import React from "react";

import { Paper } from "../components/content";
import { EventDetails } from "../components/event-details";

export default ({ data }) => {
  const eventPage = data.page;

  return (
    <Paper>
      <EventDetails event={eventPage} />
    </Paper>
  );
};

export const query = graphql`
  query EventPageQuery($slug: String!) {
    page : markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        date
        tags
        where {
          location
          name
        }
      }
    }
  }
`;
