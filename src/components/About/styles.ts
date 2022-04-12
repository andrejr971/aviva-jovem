import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-l);
  margin: 0 auto;
  padding: 128px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1140px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 720px) {
    overflow: hidden;
  }
`;

export const ContentImage = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 592px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
  }

  @media screen and (max-width: 640px) {
    max-width: 100%;

    margin-top: 72px;
  }
`;

export const ImageAvivaCircle = styled.img`
  position: absolute;

  top: -80px;
  left: -80px;

  width: 240px;
  height: 240px;
  filter: drop-shadow(0px 4px 40px rgba(223, 70, 24, 0.2));

  transform-origin: center center;

  animation: rotate-svg 32s linear infinite;

  @keyframes rotate-svg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  transform-origin: center center;

  @media screen and (max-width: 640px) {
    /* display: none; */
    width: 160px;
    height: 160px;

    top: 80%;
    left: 80%;
  }
`;

export const ReactBackground = styled(ReactSVG)`
  position: absolute;

  bottom: -80px;
  left: -80px;

  z-index: -1;

  @media screen and (max-width: 640px) {
    /* display: none; */

    top: -80px;
    left: -80px;

    transform: scale(0.8);
  }
`;

export const ImageAviva = styled.img`
  max-width: 592px;
  height: 492px;
  object-fit: cover;
  border-radius: 48px;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    height: auto;
  }
`;

export const Content = styled.div`
  margin-left: 32px;

  @media screen and (max-width: 1140px) {
    margin: 0 auto;
  }

  h3 {
    font: var(--title-3);

    margin-bottom: 24px;

    z-index: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 40%;
      height: 48px;
      background: var(--primary);
      z-index: -1;

      bottom: -10px;
      left: -10px;

      opacity: 0.8;
    }

    @media screen and (max-width: 640px) {
      font-size: 4.8rem;

      &::before {
        height: 24px;

        bottom: 10px;
      }
    }
  }

  p {
    strong {
      color: var(--primary);
    }
  }
`;
