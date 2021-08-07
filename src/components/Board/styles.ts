import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #242120 58.65%, rgba(36, 33, 32, 0) 100%);
  padding: 19rem 1.6rem;

  margin-top: 16rem;
`;

export const Content = styled.div`
  max-width: 1416px;
  margin: 0 auto;

  position: relative;
`;

export const ContentBoard = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: grid;
  grid-template-columns: repeat(4, 336px);
  gap: 2.4rem;

  margin-top: 7.2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gradient_white);
  border-radius: 24px;
  max-width: 336px;

  img {
    width: 100%;
    height: 34rem;
    object-fit: cover;
    border-radius: 24px 24px 0 0;
  }

  div {
    padding: 2.4rem;

    color: var(--black);

    h4 {
      font: var(--title_4);
    }

    strong {
      font-weight: normal;
      margin-top: 1.6rem;
      display: block;
      font: var(--text_2);
      color: var(--black_ligth);
    }
  }
`;

export const CardLeaders = styled.div`
  color: var(--white_light);
  opacity: 0.8;
  text-align: center;

  div + div {
    margin-top: 1.6rem;
  }

  h5 {
    font: var(--title_4);
    margin-bottom: 0.8rem;
  }

  ul {
    list-style: none;
    font: var(--text_3);

    li {
      strong {
        font-weight: 500;
      }

      span {
        margin-left: 0.8rem;
        opacity: 0.7;
      }

      & + li {
        margin-top: 0.8rem;
      }
    }
  }
`;

export const ControlSlider = styled.header`
  position: absolute;
  bottom: -64px;
  right: 0;

  button {
    background: transparent;
    border: 0;

    svg {
      font-size: 2.4rem;
      color: var(--orange);
    }

    & + button {
      margin-left: 1.6rem;
    }

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      svg {
        color: var(--black);
      }
    }
  }

  display: none;

  @media screen and (max-width: 1425px) {
    display: flex;
  }
`;
