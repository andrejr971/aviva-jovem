import styled from 'styled-components';

export const Container = styled.div`
  width: 384px;
  height: 400px;

  display: flex;
  position: relative;
  flex-direction: column;

  h5 {
    font: var(--title-5);
    color: var(--black);

    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 30%;
      height: 32px;
      background: var(--secondary);
      z-index: -1;

      bottom: -10px;
      left: 20px;

      opacity: 0.5;
    }
  }

  ul {
    margin-top: 32px;
    list-style: none;

    li {
      font: var(--text-5);

      strong {
        font-weight: normal;
      }

      span {
        margin-left: 8px;
        font: var(--text-6);
        color: var(--gray-1);
      }

      & + li {
        margin-top: 8px;
      }
    }
  }
`;
