import styled, { css } from "styled-components";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

export const styles = {
  content: () => css`
    margin: 0 auto;
    max-width: ${theme.content.maxWidth};
    padding: 0 ${rhythm(1)};
  `,
};

export const Paper = styled.article`
  position: relative;

  margin: ${rhythm(1)} 0;

  background-color: ${theme.colors.white};
  padding: ${rhythm(0.5)} ${rhythm(1.5)};

  ${props => !props.noShadow && css`
    box-shadow: 0 0.5rem 1rem 0.1rem ${theme.colors.shadow};
  `}
`;

export const ParagraphAlignedToRight = styled.p`
  text-align: right;
`;
