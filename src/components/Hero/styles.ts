import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  background: var(--black-dark);
`;

export const Information = styled.div`
  background: var(--gradient-1);
  color: var(--white);

  width: 100%;
  /* height: 56px; */

  > div {
    max-width: 1216px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 2px;
      height: 24px;
      background: var(--gray-5);
      margin: 0 16px;
    }

    p {
      font: var(--text-6-bold);
    }
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const InfoTheme = styled.div`
  position: relative;

  z-index: 2;
`;

export const ThemeEvent = styled.div`
  position: relative;

  z-index: 2;

  h1 {
    font: var(--title-2);
    color: var(--white);

    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 40%;
      height: 48px;
      background: var(--secondary);
      z-index: -1;

      bottom: 10px;
      left: -10px;

      opacity: 0.5;
    }

    @media screen and (max-width: 640px) {
      font-size: 4.8rem;

      &::before {
        height: 24px;

        bottom: 10px;
      }
    }
  }

  strong {
    color: var(--white-dark);
    font: var(--title-5);
    position: absolute;
    right: 0;
  }
`;

export const GroupButton = styled.div`
  margin-top: 48px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  > button {
    margin-right: 16px;
  }
`;

export const ContentVideo = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const ButtonStartVideo = styled.button`
  filter: drop-shadow(0px -20px 20px rgba(228, 103, 19, 0.07))
    drop-shadow(0px -25.625px 62.7059px rgba(228, 103, 19, 0.0456112))
    drop-shadow(0px -10.6433px 26.0448px rgba(228, 103, 19, 0.035))
    drop-shadow(0px -3.84948px 9.4199px rgba(228, 103, 19, 0.0243888));

  background: transparent;
  border: 0;
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  z-index: -1;
  right: 24px;

  transform: scale(1.2);

  opacity: 0.5;

  @media screen and (max-width: 640px) {
    transform: scale(1);

    right: -96px;
    top: -72px;
  }

  .rec_1 {
    animation: float-rec 7s ease infinite alternate;
  }

  .rec_2 {
    animation: float-rec 7s ease 3s infinite alternate;
  }

  @keyframes float-rec {
    0% {
      stroke-dasharray: 1 400;
    }
    60%,
    100% {
      stroke-dasharray: 400 0;
    }
  }
`;

export const InformationDates = styled.div`
  margin-top: 56px;
  border-top: 1px solid var(--gray-1);

  color: var(--white);

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font: var(--title-3);
    z-index: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 70%;
      height: 48px;
      background: var(--secondary);
      z-index: -1;

      bottom: 10px;
      right: -10px;

      opacity: 0.5;
    }

    @media screen and (max-width: 640px) {
      font-size: 4.8rem;

      &::before {
        height: 24px;

        bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;

    margin-top: 72px;

    border: none;
  }
`;

export const ContentInformationDates = styled.div`
  max-width: 384px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font: var(--title-5);

  p {
    text-align: center;

    &.info {
      font: var(--title-5);
    }

    span {
      margin: 0 16px;
      width: 1px;
      height: 100%;
      border: 1px solid var(--gray-1);
    }
  }

  div {
    display: flex;
    align-items: center;
    max-width: 200px;

    strong {
      font: var(--title-2);
    }
  }

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const BorderLeftInfo = styled.span`
  margin: 0 16px;
  width: 1px;
  height: 80px;
  border: 1px solid var(--gray-1);

  @media screen and (max-width: 960px) {
    width: 160px;
    height: 1px;
    margin: 24px 0px;
  }
`;
