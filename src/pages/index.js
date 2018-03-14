import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";

import imgSummary from "../images/2017-summary.png";

import { Paper } from "../components/content";

const CustomizedPaper = Paper.extend`
  h2 {
    text-align: center;
  }
`;

const ResponsiveImg = styled.img`
  max-width: 80%;
  max-heigh: 100%;
`;

export default () => (
  <CustomizedPaper>
    <h1>Hello &lambda;!</h1>
    <section>
      <p>
        Consectetur officia ex ex deserunt labore do nulla quis cupidatat sunt laboris ut.
      </p>
      <p>
        <a href="/404/">And this is a link. Is it legible?</a>
      </p>
    </section>
    <h2 id="next">Next event:</h2>
    <section>
      <p>
        Consectetur officia ex ex deserunt labore do nulla quis cupidatat sunt laboris ut.
      </p>
    </section>
    <h2 id="contact">Contact</h2>
    <section>
      <p>
        Consectetur officia ex ex deserunt labore do nulla quis cupidatat sunt laboris ut.
      </p>
    </section>
    <h2 id="2017_summary">Summary of 2017</h2>
    <section>
      <Row center={`xs`}>
        <Col xs={12}>
          <ResponsiveImg src={imgSummary} alt={`Summary of all talks made on Functional Miners from 2017`} />
        </Col>
      </Row>
    </section>
  </CustomizedPaper>
);
