import styled, { css } from 'styled-components';

interface ContainerProps {
  typeButton: 'primary' | 'secondary';
}

export const Container = styled.button<ContainerProps>`
  padding: 2.4rem;
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--gradient_orange);
  border-radius: 1.6rem;
  border: 0;
  color: var(--white_light);
  font: var(--link);

  svg {
    font-size: 2.4rem;
    margin-right: 1.6rem;
  }

  &:hover {
    box-shadow: var(--shadow_orange);
  }

  ${({ typeButton }) =>
    typeButton === 'primary' &&
    css`
      background: transparent;
      border-radius: 1.6rem;
      border: 3px solid var(--orange);
      color: var(--white_light);
      font: var(--link);

      transition: background-color 0.2s ease;

      &:hover {
        background: var(--gradient_orange);
        color: var(--white_light);
        box-shadow: var(--shadow_orange);
        border: 0;

        svg {
          color: var(--white_light);
        }
      }
    `}

  @media screen and (max-width: 800px) {
    & {
      width: 5.6rem;
      padding: 0;
    }

    svg {
      margin: 0;
    }

    span {
      display: none;
    }
  }
`;
