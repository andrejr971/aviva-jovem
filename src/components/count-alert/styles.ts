import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient_1};
    color: ${theme.colors.white_light};

    padding: 1.6rem;

    > div {
      max-width: 141.6rem;
      width: 100%;

      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 2px;
        height: 24px;
        background: ${theme.colors.gray_4};
        margin: 0 16px;
      }

      p {
        font: ${theme.fonts.texts.xsmall_m};
      }
    }
  `}
`;
