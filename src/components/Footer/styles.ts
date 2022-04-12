import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--black-dark);

  color: var(--white);
`;

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 384px;

    & + img {
      margin-top: 32px;
    }
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

export const DivThanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0.8rem;

  border-top: 1px solid var(--black);

  p {
    font: var(--text-5);
    text-align: center;

    & + p {
      margin-top: 0.8rem;
    }

    a {
      color: var(--primary);
    }
  }
`;
