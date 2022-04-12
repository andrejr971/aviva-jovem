import styled from 'styled-components';

export const Container = styled.section`
  background: var(--black-dark);
  color: var(--white);

  padding: 128px 24px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--container-l);
  margin: 0 auto;
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

export const GroupButton = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  > button {
    margin-right: 16px;
  }
`;
