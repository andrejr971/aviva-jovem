import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: var(--container-l);
  margin: 0 auto;
  padding: 128px 24px;

  overflow: hidden;

  @media screen and (max-width: 1140px) {
    padding: 128px 8px;
    max-width: 100%;
  }

  h3 {
    font: var(--title-3);

    margin-bottom: 24px;

    z-index: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 20%;
      height: 48px;
      background: var(--primary);
      z-index: -1;

      bottom: -10px;
      left: -10px;

      opacity: 0.8;
    }

    @media screen and (max-width: 640px) {
      font-size: 4.8rem;

      &::before {
        width: 40%;

        left: 10px;
      }
    }

    margin-bottom: 56px;
  }
`;
