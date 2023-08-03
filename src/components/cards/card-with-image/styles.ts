import styled, { css } from 'styled-components';

export const Container = styled.figure`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    align-items: center;

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
    margin-top: -20rem;
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
    }
  `}
`;

export const Information = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1.6rem;

    text-align: center;
    font: ${theme.fonts.texts.medium_s};
    color: ${theme.colors.white_dark};

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      strong {
        font-size: 8rem;
        font-weight: 500;
        color: ${theme.colors.white_light};
      }

      span {
        max-width: 12rem;
        text-align: left;
      }
    }
  `}
`;
