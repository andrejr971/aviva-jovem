import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  margin-top: -10rem;
  position: relative;
  width: 100%;
  height: 148.8rem;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    object-fit: cover;

    z-index: -1;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    max-width: 141.6rem;
    margin: 0 auto;

    padding-top: 32rem;

    span {
      background: ${theme.colors.gradient_1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      list-style: none;

      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 4rem;
      gap: 0.8rem;
      text-align: center;

      font: ${theme.fonts.texts.large};
      padding: 1.6rem;
    }

    strong {
      font: ${theme.fonts.texts.xlarge};
      font-size: 8rem;

      width: 100%;
      display: block;
      text-align: center;

      margin-top: 4rem;
    }
  `}
`;

export const ContentReason = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 58.6rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font: ${theme.fonts.texts.xlarge};
    font-size: 8rem;

    p:nth-child(2) {
      width: 100%;
      text-align: right;
    }

    ${media.lessThan('medium')`
      font-size: 4rem;
      gap: 0.4rem;
      padding: 1.6rem;
    `}
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    font: ${theme.fonts.titles.xxlarge};

    text-align: center;
    font-size: 18rem;

    ${media.lessThan('medium')`
      font-size: 10rem;
      gap: 0.4rem;
      padding: 1.6rem;
    `}
  `}
`;
