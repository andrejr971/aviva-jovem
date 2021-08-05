import styled, { css } from 'styled-components';

interface CardProps {
  position: 'first' | 'last';
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1416px;
  margin: 0 auto;
  margin-top: 27.2rem;

  padding: 0.8rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65rem, 1fr));
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 1600px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    }
  }

  @media screen and (max-width: 1366px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
    }
  }

  @media screen and (max-width: 1080px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ContentAbout = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;

  button {
    background: transparent;
    border: 0;

    color: var(--white_ligth);
    font: var(--link);
    font-size: 1.65rem;
    padding: 1.6rem 0;

    opacity: 0.5;

    &:hover {
      text-decoration: underline;
      opacity: 0.3;
    }
  }

  p {
    font: var(--text_1);

    strong {
      color: var(--orange);

      margin-right: 0.8rem;
    }

    @media screen and (max-width: 1080px) {
      & {
        text-align: center;
      }
    }
  }
`;

export const AboutImages = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  img.image-about {
    width: 100%;
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;

  background: var(--gradient_white);
  border-radius: 2.4rem;

  box-shadow: var(--shadow_orange);

  position: absolute;

  img {
    width: 9.6rem;
    height: 9.6rem;
  }

  @media screen and (max-width: 1080px) {
    & {
      width: 9.6rem;
      height: 9.6rem;

      img {
        width: 6.4rem;
        height: 6.4rem;
      }
    }
  }

  @keyframes mergeTop {
    0% {
      margin-top: -24px;
    }
    100% {
      margin-top: 0;
    }
  }

  @keyframes mergeBottom {
    0% {
      margin-bottom: -24px;
    }
    100% {
      margin-bottom: 0;
    }
  }

  ${({ position }) =>
    position === 'first' &&
    css`
      bottom: 4.8rem;
      left: 4.8rem;

      animation: mergeBottom 2s infinite ease-in-out alternate-reverse;

      @media screen and (max-width: 400px) {
        & {
          bottom: 0rem;
          left: 0rem;
        }
      }
    `}

  ${({ position }) =>
    position === 'last' &&
    css`
      top: 4.8rem;
      right: -2.4rem;

      animation: mergeTop 2s infinite 0.5s ease-in-out alternate-reverse;

      @media screen and (max-width: 1600px) {
        & {
          top: 4.8rem;
          right: 2.4rem;
        }
      }

      @media screen and (max-width: 400px) {
        & {
          top: 0rem;
          right: 0rem;
        }
      }
    `}
`;
