import styled, { css } from 'styled-components';

export const Container = styled.figure`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 45.6rem;

    align-items: center;

    &:last-child {
      padding-right: 2.4rem;
    }

    img {
      width: 100%;
      height: 50rem;
      border: 1px solid ${theme.colors.black_light};
      border-radius: 0.4rem;
      object-fit: cover;
    }
  `}
`;

export const Description = styled.figcaption`
  ${({ theme }) => css`
    margin-top: -10rem;
    padding: 1.6rem;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding: 1.6rem;
      align-items: center;
      gap: 1.6rem;

      border: 1px solid ${theme.colors.black_light};

      border-radius: 4px;
      background: linear-gradient(
        136deg,
        rgba(36, 33, 32, 0.8) 0%,
        rgba(36, 33, 32, 0.6) 100%
      );
      backdrop-filter: blur(20px);

      strong {
        font: ${theme.fonts.titles.large};
        font-weight: 400;
        color: ${theme.colors.white_light};
      }

      span {
        color: ${theme.colors.white_dark};
        font: ${theme.fonts.texts.small_r};
        text-align: center;
      }
    }
  `}
`;
