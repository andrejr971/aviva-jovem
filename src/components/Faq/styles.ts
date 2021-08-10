import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1416px;
  margin: 27.2rem auto 0;

  ul {
    list-style: none;
    width: 100%;
  }
`;

export const Card = styled.li`
  width: 100%;
  padding: 0 0.8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      div {
        background: var(--gradient_white);

        width: 5.6rem;
        height: 5.6rem;
        border-radius: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 2.4rem;
          color: var(--orange);
        }
      }

      h4 {
        flex: 1;
        margin-left: 2.4rem;

        font: var(--title_4);

        @media screen and (max-width: 400px) {
          max-width: 25rem;
        }
      }
    }

    button {
      background: transparent;
      border: 0;
      z-index: 10;

      svg {
        font-size: 2.4rem;
        color: var(--orange);

        transition: transform 0.2s ease-in;
      }

      &.active {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }

  & + li {
    margin-top: 3.2rem;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  opacity: 0;
  height: 0;

  button {
    margin-top: 1.6rem;
    max-width: 26rem;
  }

  transition: opacity 0.3s ease;

  &.active {
    opacity: 1;
    height: auto;
  }
`;
