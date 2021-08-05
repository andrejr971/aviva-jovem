import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70rem;
  margin-bottom: 23rem;

  background: url('assets/images/svg/lines.svg') top center no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 720px) {
    & {
      height: 62rem;
      margin-bottom: 15rem;
    }
  }
`;

export const ThemeEvent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    height: 15rem;

    margin-bottom: 2.4rem;
  }

  div {
    position: relative;
  }

  h1 {
    width: 100%;
    max-width: 60rem;
    text-align: center;
    height: auto;
    font-family: 'Rock Salt', monospace;
    font-size: 7.2rem;
    line-height: 130%;

    span {
      background: var(--gradient_orange);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      margin: 0 1.6rem;
    }

    @media screen and (max-width: 750px) {
      & {
        max-width: 50rem;
        font-size: 5.6rem;
      }
    }

    @media screen and (max-width: 550px) {
      & {
        max-width: 45rem;
        font-size: 4.8rem;
      }
    }

    @media screen and (max-width: 470px) {
      & {
        max-width: 35rem;
        font-size: 3.6rem;
      }
    }
  }

  strong {
    font-family: 'Rock Salt', monospace;
    font-size: 3.6rem;
    color: var(--green);

    position: absolute;
    right: 0;
    bottom: 0;

    transform: rotate(-15deg);

    @media screen and (max-width: 750px) {
      & {
        font-size: 2.4rem;
      }
    }
  }
`;

export const BackgroundHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  video {
    /* width: 100%;
    height: 100%; */
    width: 1920px;
    height: 1080px;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(
      90deg,
      #121210 10.73%,
      rgba(18, 18, 16, 0.8) 47.71%,
      #121210 93.54%
    );
  }
`;
