import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 27.2rem;
  width: 100%;

  position: relative;

  .background-line {
    position: absolute;
    z-index: -1;
    opacity: 0.6;
    width: 100%;
    height: 60rem;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1416px;
  margin: 0 auto;

  align-items: center;
  justify-content: center;
`;

export const ImageLecturer = styled.div`
  @keyframes animation-lecturer {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: relative;

  img {
    width: 32rem;
    height: 32rem;
    border-radius: 3.2rem;

    box-shadow: var(--shadow_dark);

    &.confirm-lecturer {
      width: 20rem;
      height: 20rem;
      box-shadow: none;

      position: absolute;
      top: -7.2rem;
      right: -7.2rem;

      animation: animation-lecturer 15s linear infinite;

      @media screen and (max-width: 640px) {
        width: 15rem;
        height: 15rem;

        top: 30rem;
        right: -0rem;
      }
    }
  }

  margin-bottom: 3.2rem;
`;

export const NameLecturer = styled.div`
  h2 {
    font-size: 5.6rem;

    span {
      margin-left: 0;
      margin-right: 1.6rem;
    }

    @media screen and (max-width: 640px) {
      font-size: 3.2rem;
    }
  }

  p {
    font: var(--title_3);
    font-weight: 400;
    color: var(--black_light);
    text-align: center;
    margin-top: 1.6rem;

    @media screen and (max-width: 640px) {
      font-size: 2.4rem;
    }
  }
`;
