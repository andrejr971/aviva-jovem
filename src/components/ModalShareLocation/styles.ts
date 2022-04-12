import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & + div {
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid var(--gray-1);
  }

  header {
    font: var(--title-6);

    color: var(--gray-5);

    display: flex;
    align-items: center;

    span {
      margin: 0 16px;
      width: 8px;
      height: 8px;
      display: block;
      border-radius: 4px;
      background: var(--gray-1);
    }
  }

  div {
    margin-top: 16px;
    display: flex;
    align-items: center;

    font: var(--title-3);

    p {
      margin-left: 8px;
    }
  }

  p {
    font: var(--text-4);
  }

  button {
    margin-top: 16px;
  }
`;
