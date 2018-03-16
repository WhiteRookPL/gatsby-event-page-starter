import React from "react";
import Moment from "react-moment";
import { Col, Grid, Row } from "react-flexbox-grid";
import moment from "moment";

import { CallToAction, Dimmed, TagsList } from "./content";
import { MapWithMarker } from "./map";
import { renderAst } from "./markdown-components";

export const EventDetails = ({ event }) => {
  let info = <span></span>;

  let receivedEvent = event;

  if (typeof (receivedEvent) === `string`) {
    receivedEvent = JSON.parse(receivedEvent);
  }

  const { where } = receivedEvent.frontmatter;

  if (moment(receivedEvent.frontmatter.date).isBefore(moment())) {
    info =
      <Dimmed>
        Event took place <Moment fromNow>{receivedEvent.frontmatter.date}</Moment>.
      </Dimmed>;
  } else {
    info =
      <CallToAction>
        Event will be <Moment fromNow>{receivedEvent.frontmatter.date}</Moment>.
      </CallToAction>;
  }

  return (
    <Grid fluid>
      <Row center={`xs`}>
        <Col xs={12}>
          <Row center={`xs`}>
            <Col xs={12}>
              <h1>{receivedEvent.frontmatter.title}</h1>
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <TagsList tags={receivedEvent.frontmatter.tags} />
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <h2>When?</h2>
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <Row center={`xs`}>
                <Col xs={12}>
                  <strong>
                    {info}
                  </strong>
                </Col>
              </Row>
              <Row center={`xs`}>
                <Col xs={12}>
                  <strong>Date</strong>: <Moment format="DD MMMM YYYY">{receivedEvent.frontmatter.date}</Moment>
                </Col>
              </Row>
              <Row center={`xs`}>
                <Col xs={12}>
                  <strong>Time</strong>: <Moment format="HH:mm">{receivedEvent.frontmatter.date}</Moment>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <h2>Where?</h2>
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <MapWithMarker location={where.location} name={where.name} link={where.link} />
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              <h2>Talks and Speakers</h2>
            </Col>
          </Row>
          <Row center={`xs`}>
            <Col xs={12}>
              {renderAst(receivedEvent.htmlAst)}
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};
