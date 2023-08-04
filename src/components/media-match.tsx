import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  less?: breakpoint;
  greater?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ less, greater }) => css`
    display: none;

    ${!!less && mediaMatchModifiers.lessThan(less)}
    ${!!greater && mediaMatchModifiers.greaterThan(greater)}
  `}
`;
