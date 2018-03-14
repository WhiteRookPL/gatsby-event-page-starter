import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faHome } from "@fortawesome/fontawesome-free-solid";

import theme from "../theme/main";

export const HomeIcon = () => (
  <FontAwesomeIcon icon={faHome} />
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
