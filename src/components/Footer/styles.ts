import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  margin-top: 27.2rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 577px;

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
      width: 6.4rem;
      height: 6.4rem;
      stroke-width: 0.2rem;

      color: var(--orange);
    }
  }

  p {
    flex: 1;
    margin-left: 2.4rem;
    font: var(--title_3);
    color: var(--black);
    font-weight: normal;

    @media screen and (max-width: 640px) {
      font-size: 3.2rem;
    }
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media screen and (max-width: 820px) {
    & {
      flex-direction: column;
      max-width: 100%;

      p {
        margin-top: 1.6rem;
        max-width: 45rem;
        text-align: center;
      }
    }
  }

  & + div {
    margin-top: 2.4rem;
  }
`;

export const GroupButton = styled.div`
  grid-column: 1/3;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 26rem;

    color: var(--black);

    & + button {
      margin-left: 2.4rem;
      color: var(--white_ligth);
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;

    button {
      max-width: 100%;

      & + button {
        margin-left: 0;
        margin-top: 1.6rem;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  background: var(--gradient_white);

  padding: 4.8rem 0.8rem;
`;

export const ContentFooter = styled.div`
  width: 100%;
  max-width: 1416px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  > img {
    @media screen and (max-width: 1200px) {
      margin-top: 2.4rem;
    }
  }
`;

export const DivThanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.4rem 0.8rem;

  p {
    font: var(--text_2);
    text-align: center;

    & + p {
      margin-top: 0.8rem;
    }

    a {
      color: var(--orange);
    }
  }
`;
