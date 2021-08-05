import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-left: 0.8rem;

  h2 {
    font: var(--title_2);
    color: var(--white_light);

    span {
      color: var(--orange);
      margin-left: 0.8rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: -1.6rem;
    top: 0rem;
    bottom: 0;
    width: 0.4rem;
    background: var(--gradient_orange);
    border-radius: 0.2rem;
  }

  @media screen and (max-width: 1400px) {
    margin-left: 1.6rem;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
  }
`;
