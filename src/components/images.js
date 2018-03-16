import React from "react";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import { SocialIcons } from "./icons";

import theme from "../theme/main";

const getImages = function getImages (resolver) {
  return resolver.keys().reduce((accumulator, item) => {
    accumulator[item.replace(`./`, ``)] = resolver(item);
    return accumulator;
  }, {});
};

const peopleAvatars = getImages(require.context(`../images/people`, false, /\.(png|jpe?g)$/));

const Avatar = styled.img`
  margin: 0;
  width: 200px;
  border: 5px solid ${theme.colors.brilliantAzure};
`;

export const PersonProfile = ({ avatar, name, bio, title, abstract, social }) => {
  let titleSection = <span></span>;
  let abstractSection = <span></span>;
  let bioSection = <span></span>;

  const socialProfiles = JSON.parse(social || `{}`);

  if (title && abstract) {
    titleSection =
      <Col xs={12}>
        <h4 dangerouslySetInnerHTML={{ __html: `<strong>Title</strong>: ${title}` }} />
      </Col>;

    abstractSection =
      <Col xs={12}>
        <p dangerouslySetInnerHTML={{ __html: `<strong>Abstract</strong>: ${abstract}` }} />
      </Col>
  }

  if (bio) {
    bioSection =
      <Col xs={12}>
        <p dangerouslySetInnerHTML={{ __html: bio }} />
      </Col>;
  }

  return (
    <Grid fluid>
      <Row center={`xs`}>
        {titleSection}
        {abstractSection}
        <Col xs={12}>
          <Avatar src={peopleAvatars[avatar]} alt={name} />
        </Col>
        <Col xs={12}>
          <h5 dangerouslySetInnerHTML={{ __html: name }} />
        </Col>
        <Col sm={12} md={4}>
          <SocialIcons social={socialProfiles} />
        </Col>
        {bioSection}
      </Row>
    </Grid>
  );
};
