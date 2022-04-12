import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  img {
    width: 100%;

    border-radius: 24px;

    &.mobile {
      display: none;
    }

    @media screen and (max-width: 640px) {
      &.desktop {
        display: none;
      }

      &.mobile {
        display: inline-block;
      }
    }
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  position: absolute;

  top: 0.8rem;
  right: 0.8rem;

  button {
    width: 3.6rem;
    height: 3.6rem;
    background: transparent;
    border: 0;

    svg {
      font-size: 2.4rem;
      color: var(--black-light);
    }

    transition: all 0.2s ease-in;

    &:hover {
      border-radius: 0.4rem;
      opacity: 0.8;
    }
  }
`;
