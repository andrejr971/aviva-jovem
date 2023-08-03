import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

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
      color: ${theme.colors.primary};
    }

    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;

      color: ${theme.colors.white_dark};
      font: ${theme.fonts.texts.medium_r};
    }
  `}
`;
