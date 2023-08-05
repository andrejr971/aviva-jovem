import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.black_light};
  `}
`;

export const Location = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.6rem;

    header {
      font: ${theme.fonts.titles.medium};

      color: ${theme.colors.white_dark};

      display: flex;
      align-items: center;

      span {
        margin: 0 16px;
        width: 8px;
        height: 8px;
        display: block;
        border-radius: 4px;
        background: ${theme.colors.black_light};
      }
    }

    div {
      display: flex;
      align-items: center;

      font: var(--title-3);

      p {
        margin-left: 8px;
      }
    }

    p {
      font: var(--text-4);
    }
  `}
`;
