import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 3.2rem auto 0;

  padding: 1.2rem;
`;

export const BackgroundHero = styled.div`
  position: absolute;
  top: -20rem;
  right: -20rem;

  z-index: -1;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    margin-top: 3.2rem;
    list-style: none;
    width: 100%;
    max-width: 45rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      width: 100%;

      a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
        padding: 0.8rem;
        background: var(--black);
        border-radius: 0.8rem;

        display: flex;
        justify-content: center;
      }

      & + li {
        margin-top: 1.6rem;
      }
    }
  }
`;
