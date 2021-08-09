import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  width: 100%;
  max-width: 1416px;
  margin: 0 auto;
  margin-top: -4.8rem;
  background: var(--gradient_white);
  border-radius: 2.4rem;

  box-shadow: var(--shadow_black);

  padding: 4rem;

  @media screen and (max-width: 860px) {
    & {
      display: flex;
      flex-direction: column;

      margin-top: -1.6rem;
    }
  }
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
`;
