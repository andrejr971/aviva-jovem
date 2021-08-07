import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 34rem;
  width: 100%;
  overflow-y: hidden;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65rem, 1fr));
  align-items: center;
  gap: 1.6rem;

  .info-invite {
    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .info {
      display: flex;
      align-items: center;

      p {
        font-size: 3.2rem;
        margin-left: 2.4rem;
        max-width: 40rem;
      }

      & + div {
        margin-top: 2.4rem;
      }
    }

    .info-buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 26rem;

        & + button {
          margin-left: 2.4rem;
        }

        &.btn-secondary {
          color: var(--white_light);
        }
      }
    }

    .background-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      object-fit: cover;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      z-index: -1;
      background: linear-gradient(
        180deg,
        #121210 6.56%,
        rgba(18, 18, 16, 0.68) 55%,
        #121210 90.94%
      );
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ContentInformations = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-width: 26rem;

      & + button {
        margin-left: 2.4rem;
      }
    }
  }

  .background-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
    background: linear-gradient(
      180deg,
      #121210 6.56%,
      rgba(18, 18, 16, 0.68) 55%,
      #121210 90.94%
    );
  }

  @media screen and (max-width: 720px) {
    padding: 8rem 0;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: 3.2rem;
    margin-left: 2.4rem;
    max-width: 40rem;

    @media screen and (max-width: 720px) {
      text-align: center;
    }
  }

  & + div {
    margin-top: 2.4rem;
  }

  div {
    width: 11.2rem;
    height: 11.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--white_light);
    border-radius: 2.4rem;
    box-shadow: var(--shadow_orange);

    svg {
      font-size: 5.6rem;
      color: var(--orange);
    }

    @media screen and (max-width: 720px) {
      margin-bottom: 2.4rem;
    }
  }
`;

export const ContentInvite = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 53rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    width: 45rem;
    height: 45rem;
    z-index: -1;
  }

  p {
    max-width: 40rem;
    font-family: 'Rock Salt', monospace;
    font-size: 5.6rem;
    line-height: 130%;
    text-align: center;

    span {
      background: var(--gradient_orange);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media screen and (max-width: 720px) {
    p {
      font-size: 4.8rem;
    }

    img {
      width: 30rem;
      height: 30rem;
    }
  }
`;
