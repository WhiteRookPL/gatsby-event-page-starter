import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import imgLogo from "../images/favicon.png";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const Navigation = styled.nav`
  margin: ${rhythm(1)} 0;
`;

const LogoImage = styled.img`
  max-width: 75px;
  margin: 0;
`;

const Title = styled.h1`
  font-size: ${rhythm(1)};
`;

const NoLink = styled(Link)`
  color: ${theme.colors.foreground};
  background-image: none;
`;

export const NavigationBar = ({ title }) => (
  <Navigation>
    <Grid fluid>
      <Row center={`xs`} middle={`xs`}>
        <Col md={6} sm={12}>
          <NoLink to={`/`}>
            <Row center={`xs`} middle={`xs`}>
              <Col md={3} sm={12}>
                <LogoImage src={imgLogo} />
              </Col>
              <Col md={9} sm={12}>
                <Title>{title}</Title>
              </Col>
            </Row>
          </NoLink>
        </Col>
        <Col md={6} sm={12}>
          <Row center={`xs`} middle={`xs`}>
            <Col xs={12}>
              <Link to={`/events`}>Past Events</Link>
            </Col>
            <Col xs={12}>
              <Link to={`/book-club`}>Book Club</Link>
            </Col>
            <Col xs={12}>
              <Link to={`/computer-science-nerdz`}>Computer Science <em>Nerdz</em></Link>
            </Col>
            <Col xs={12}>
              <Link to={`/organizers`}>About</Link>
            </Col>
            <Col xs={12}>
              <Link to={`/#contact`}>Contact</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Navigation>
);
