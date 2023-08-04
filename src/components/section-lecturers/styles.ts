import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 141.6rem;

    margin: 0 auto;
    margin-top: 20rem;

    @media screen and (max-width: 640px) {
      padding: 1.6rem;
    }

    h3 {
      font: ${theme.fonts.titles.large};

      display: flex;
      gap: 0.8rem;

      span {
        background: ${theme.colors.gradient_1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `}
`;
