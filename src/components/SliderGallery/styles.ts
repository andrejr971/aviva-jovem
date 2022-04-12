import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 128px 0;

  overflow: hidden;

  img {
    & + img {
      margin-left: 32px;
    }

    @media screen and (max-width: 640px) {
      width: 400px;
    }
  }
`;

export const ContentLine1 = styled.div`
  width: 100%;

  display: flex;
  scroll-behavior: smooth;

  animation: move 24s infinite linear;

  animation-direction: right;
  animation-timing-function: linear;

  @media screen and (max-width: 640px) {
    animation-duration: 12px;
  }

  @keyframes move {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`;

export const ContentLine2 = styled.div`
  margin-top: 32px;
  margin-left: 120px;
  scroll-behavior: smooth;

  display: flex;

  animation: move-inverse 24s infinite linear;

  animation-direction: right;
  animation-timing-function: linear;

  @keyframes move-inverse {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`;
