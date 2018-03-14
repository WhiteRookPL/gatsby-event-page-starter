import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";
import { faFacebookF, faTwitter } from "@fortawesome/fontawesome-free-brands";

import { GoogleAnalyticsOptOutLink } from "./cookies.js"
import { SocialMediaIcon } from "./icons";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const FooterGrid = styled(Grid)`
  margin: ${rhythm(1)} 0;
  font-size: ${rhythm(0.6)};

  color: ${theme.colors.pastelGray};

  h3 {
    font-size: ${rhythm(0.8)};
  }

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }
`;

const SmallEm = styled.em`
  font-size: small;
`;

export const SummarySection = ({ social, contact }) => (
  <section>
    <FooterGrid fluid>
      <Row start={`md`} center={`xs`}>
        <Col sm={12} md={6}>
          <Row start={`md`} center={`sm`}>
            <Col xs={12}>
              <h3>Functional Miners</h3>
            </Col>
          </Row>
          <Row start={`md`} center={`sm`}>
            <Col xs={12}>
              <ul>
                <li><Link to={`/events`}>Past Events</Link></li>
                <li><Link to={`/organizers`}>Organizers</Link></li>
                <li><Link to={`/computer-science-nerdz`}>Computer Science <em>Nerdz</em></Link></li>
                <li><Link to={`/terms-of-use`}>Terms of use</Link></li>
                <li><Link to={`/code-of-conduct`}>Code of conduct</Link></li>
                <li><Link to={`/#contact`}>Contact</Link></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6}>
          <Row end={`md`} center={`sm`}>
            <Col xs={12}>
              <h3>Social Media</h3>
            </Col>
          </Row>
          <Row end={`md`} center={`xs`}>
            <Col xs={3}>
              <Row around={`xs`} >
                <Col>
                  <SocialMediaIcon>
                    <a href={social.facebookProfile} target={`_blank`}><FontAwesomeIcon icon={faFacebookF} /></a>
                  </SocialMediaIcon>
                </Col>
                <Col>
                  <SocialMediaIcon>
                    <a href={social.twitterProfile} target={`_blank`}><FontAwesomeIcon icon={faTwitter} /></a>
                  </SocialMediaIcon>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row end={`md`} center={`sm`}>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <a href={`mailto:${contact.email}`} target={`_blank`}>Contact us!</a>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <GoogleAnalyticsOptOutLink />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row center={`xs`}>
        <SmallEm>Copyright &copy; White Rook &minus; 2018</SmallEm>
      </Row>
    </FooterGrid>
  </section>
);
