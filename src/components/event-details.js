import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

import { TagsList } from "./content";
import { renderAst } from "./markdown-components";

export const EventDetails = ({ event }) => (
  <Grid fluid>
    <Row center={`xs`}>
      <Col xs={12}>
        <Row center={`xs`}>
          <Col xs={12}>
            <h1>{event.frontmatter.title}</h1>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
            <TagsList tags={event.frontmatter.tags} />
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
            <h2>When?</h2>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
            <h2>Where?</h2>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
            <h2>Speakers</h2>
          </Col>
        </Row>
        <Row center={`xs`}>
          <Col xs={12}>
            {renderAst(event.htmlAst)}
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
);
