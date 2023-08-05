import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.black_light};
    background: ${theme.colors.background};
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 141.6rem;
  margin: 0 auto;
  padding: 1.6rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    text-align: center;

    h3 {
      font: ${theme.fonts.titles.xlarge};
    }

    strong {
      font: ${theme.fonts.titles.large};

      span {
        background: ${theme.colors.gradient_1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `}
`;

export const GroupInvite = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  align-items: center;
`;

export const DivInvite = styled.div`
  display: flex;
  gap: 2.4rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const GroupButton = styled.div`
  width: 32rem;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const LogoADF = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    gap: 2.4rem;

    padding: 1.6rem;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}

    div {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      ${media.lessThan('medium')`
        align-items: center;
      `}

      font: ${theme.fonts.texts.medium_s};

      strong {
        font-size: 3.2rem;
        font-weight: 500;
      }
    }
  `}
`;

export const SectionCredit = styled.section`
  ${({ theme }) => css`
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    padding: 2.4rem 1.6rem;

    border-top: 1px solid ${theme.colors.black_light};
    background: ${theme.colors.background};

    align-items: center;
    gap: 0.8rem;

    text-align: center;

    a {
      background: ${theme.colors.gradient_1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
