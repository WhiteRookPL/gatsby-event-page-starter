import React from "react";
import Link from "gatsby-link";
import Moment from "react-moment";
import { Col, Row } from "react-flexbox-grid";

import { Dimmed, Paper } from "../components/content";
import { PlainList, PlainListItem } from "../components/lists";
import { renderAst } from "../components/markdown-components";

import { rhythm } from "../theme/typography";

const SpacedPlainList = PlainList.extend`
  margin-bottom: ${rhythm(1)};
`;

const PastEvent = ({ event }) => (
  <PlainListItem>
    <Link to={event.fields.slug}>
      <Row between={`xs`} center={`xs`} middle={`xs`}>
        <Col lg={6} md={12}>
          {event.frontmatter.title}
        </Col>
        <Col lg={6} md={12}>
          <Dimmed>
            <Moment format="DD MMM YYYY, HH:mm">{event.frontmatter.date}</Moment>
          </Dimmed>
        </Col>
      </Row>
    </Link>
  </PlainListItem>
);

export default ({ data }) => {
  const events = data.events.edges;

  let content = <PlainListItem><Dimmed>No past events</Dimmed></PlainListItem>;

  if (events.length > 0) {
    content = events.map((event, index) => <PastEvent key={index} event={event.node} />);
  }

  return (
    <Paper centered={data.page.frontmatter.centered}>
      {renderAst(data.page.htmlAst)}
      <SpacedPlainList>
        {content}
      </SpacedPlainList>
    </Paper>
  );
};

export const query = graphql`
  query EventsQuery {
    page : markdownRemark(fields: { slug: { eq: "/events/" } }) {
      htmlAst
      frontmatter {
        centered
      }
    }

    events : allMarkdownRemark(
      skip: 1
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
