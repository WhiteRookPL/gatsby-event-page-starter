import React from "react";
import styled from "styled-components";

const SmallAnchor = styled.a`
  font-size: small;
`;

export const GoogleAnalyticsOptOutLink = () => (
  // eslint-disable-next-line no-script-url
  <SmallAnchor href="javascript:gaOptout();">Disable Google Analytics</SmallAnchor>
);
