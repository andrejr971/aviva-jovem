import styled, { DefaultTheme, css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5.6rem;

  max-width: 141.6rem;

  margin: 0 auto;
  padding: 1.6rem;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 12rem;

  ${media.lessThan('medium')`
    margin-top: 5.6rem;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font: ${theme.fonts.titles.large};

    font-size: 7.2rem;

    span {
      background: ${theme.colors.gradient_1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${media.lessThan('medium')`
      font-size: 4.4rem;
    `}
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font: ${theme.fonts.titles.medium};

    max-width: 100rem;
    font-weight: 400;

    ${media.lessThan('medium')`
      font: ${theme.fonts.titles.small};
      font-weight: 400;
    `}
  `}
`;

export const Reference = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font: ${theme.fonts.titles.small};

    color: ${theme.colors.gray_4};
    margin-top: 1.6rem;
  `}
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  max-height: 108rem;

  &::before {
    background: linear-gradient(
      180deg,
      rgba(18, 18, 16, 0.85) 0%,
      #121210 100%
    );

    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
  }

  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ellipse = (theme: DefaultTheme) => css`
  width: 674px;
  height: 674px;
  flex-shrink: 0;

  border-radius: 674px;
  opacity: 0.5;
  background: ${theme.colors.gradient_1};
  filter: blur(200px);

  position: absolute;
`;

export const Ellipse = styled.div`
  ${({ theme }) => css`
    ${ellipse(theme)};

    top: -30rem;
    left: -30rem;

    ${media.lessThan('medium')`
      top: -40rem;
      left: -40rem;
    `}
  `}
`;

export const EllipseBottom = styled.div`
  ${({ theme }) => css`
    ${ellipse(theme)};

    z-index: -1;

    bottom: -30rem;
    right: -30rem;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const ContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  gap: 2.4rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  `}

  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    gap: 7.2rem;
  `}
`;

export const MoreInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;

      font: ${theme.fonts.texts.small_r};
      color: ${theme.colors.white_dark};

      background: transparent;
      border: 0;
    }
  `}
`;
