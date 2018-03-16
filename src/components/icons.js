import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";

import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faHome, faRssSquare } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

export const HomeIcon = () => (
  <FontAwesomeIcon icon={faHome} />
);

const NiceIcon = styled.span`
  margin-left: ${rhythm(0.25)};
  bottom: -1px;
  position: relative;
`;

export const EnvelopeIcon = () => (
  <NiceIcon>
    <FontAwesomeIcon icon={faEnvelope} />
  </NiceIcon>
);

export const SocialMediaIcon = styled.span`
  a {
    color: ${theme.colors.foreground};
    background-image: none;
    text-shadow: none;
  }

  a:hover {
    color: ${theme.colors.link};
  }
`;

const makeSocialMediaIcon = function makeSocialMediaIcon (link, icon) {
  if (!link) {
    return null;
  }

  return (
    <SocialMediaIcon>
      <a href={link} target={`_blank`}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </SocialMediaIcon>
  );
};

export const SocialIcons = ({ social }) => {
  const facebook = makeSocialMediaIcon(social.facebook, faFacebookF);
  const github = makeSocialMediaIcon(social.github, faGithub);
  const linkedin = makeSocialMediaIcon(social.linkedin, faLinkedinIn);
  const twitter = makeSocialMediaIcon(social.twitter, faTwitter);
  const www = makeSocialMediaIcon(social.www, faRssSquare);

  const icons = [
    facebook,
    github,
    linkedin,
    twitter,
    www,
  ].filter(icon => icon !== null);

  return (
    <Row around={`xs`}>
      {icons.map((icon, index) => <Col key={index}>{icon}</Col>)}
    </Row>
  );
}
