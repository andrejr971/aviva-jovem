import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 141.6rem;
    margin: 0 auto;
    margin-top: 20rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    position: relative;

    padding: 1.6rem;

    ${media.lessThan('medium')`
      margin-top: 12rem;
    `}

    img {
      position: absolute;
      width: calc(100% - 3.2rem);

      object-fit: cover;
      border: 1px solid ${theme.colors.black_light};
      border-radius: 0.4rem;
      top: -8rem;

      z-index: -1;

      ${media.greaterThan('medium')`
        height: 100%;
      `}

      ${media.lessThan('medium')`
        height: 30rem;
      `}
    }

    span {
      background: ${theme.colors.gradient_1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    margin-bottom: 20rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  width: 100%;
  max-width: 67.2rem;

  /* margin-bottom: -8rem; */

  /* ${media.lessThan('medium')`
    max-width: 100%;
    margin-bottom: -12rem;
  `}

  ${media.lessThan('small')`
    margin-top: 24rem;
  `} */
`;

export const SectionAbout = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem;

    border: 1px solid ${theme.colors.black_light};
    border-radius: 4px;
    background: linear-gradient(
      136deg,
      rgba(36, 33, 32, 0.8) 0%,
      rgba(36, 33, 32, 0.6) 100%
    );
    backdrop-filter: blur(20px);

    h2 {
      font: ${theme.fonts.titles.large};
    }

    p {
      font: ${theme.fonts.texts.medium_s};
    }
  `}
`;
