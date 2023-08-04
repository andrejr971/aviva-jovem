import styled, { css } from 'styled-components';

export const Container = styled.figure`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
`;

export const Description = styled.figcaption`
  ${({ theme }) => css`
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

    p {
      max-width: 36.8rem;
    }

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
