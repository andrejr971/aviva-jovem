import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--black-dark);

  color: var(--white);

  @keyframes animation {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    30% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
    }
    60%,
    90% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      fill-opacity: 1;
    }
  }

  @keyframes animation-fire2 {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    30% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
    }
    60%,
    90% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    100% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 0;
      display: none;
    }
  }

  @keyframes logo {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    70% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
    }
    100% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 0;
      display: none;
    }
  }

  @keyframes out {
    0% {
      left: 0;
    }
    100% {
      left: -120%;
    }
  }

  animation: out 2s ease 9s forwards;

  svg {
    width: 25rem;
    height: 25rem;
    animation: text 4s ease forwards;
  }
  /*
  #arco {
    stroke-width: 25px;
    animation: animation 7s ease forwards;
  }

  #fire-1 {
    stroke: #da251c;
    animation: animation 3s ease forwards;
  }

  #fire-2 {
    stroke: #e46713;
    animation: animation 3s ease forwards;
  }

  #fire-3 {
    stroke: #fff500;
    animation: animation 3s ease forwards;
  } */
`;

export const Description = styled.p`
  @keyframes text {
    0% {
      opacity: 0;
      margin-top: -50px;
    }
    70% {
      opacity: 1;
      margin-bottom: 0;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
  font-family: 'Poppins', sans-serif;
  font-size: 5.6rem;
  line-height: 130%;
  margin-top: 2.4rem;
  text-align: center;
  padding: 0.8rem;
  animation: text 4s ease forwards;
  span {
    background: var(--gradient-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TextInvite = styled.p`
  @keyframes invite {
    0% {
      opacity: 0;
      margin-bottom: -50px;
    }
    70% {
      opacity: 1;
      margin-bottom: 0;
    }
    100% {
      opacity: 0;
    }
  }

  max-width: 40rem;
  font-family: 'Poppins', sans-serif;
  font-size: 5.6rem;
  line-height: 130%;
  text-align: center;
  opacity: 0;
  animation: invite 5s ease 4s forwards;
  margin-top: -30rem;

  span {
    background: var(--gradient-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
