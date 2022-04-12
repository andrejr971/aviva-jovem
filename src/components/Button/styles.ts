import styled, { css } from 'styled-components';

interface IContainerProps {
  typeButton: 'primary' | 'secondary';
  colorWhite?: boolean;
}

export const Container = styled.button<IContainerProps>`
  font: var(--text-6-bold);
  padding: 16px 24px;

  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 24px;

  color: var(--white);

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 36px 113px rgba(151, 41, 44, 0.12),
      0px 13.1406px 41.2469px rgba(151, 41, 44, 0.0827978),
      0px 6.37951px 20.0246px rgba(151, 41, 44, 0.0667549),
      0px 3.12736px 9.81642px rgba(151, 41, 44, 0.0532451),
      0px 1.23656px 3.88143px rgba(151, 41, 44, 0.0372022);

    opacity: 0.9;
  }

  ${({ typeButton, colorWhite }) =>
    typeButton === 'secondary' &&
    css`
      background: transparent;
      color: ${colorWhite ? 'var(--white)' : 'inherit'};

      &:hover {
        background: var(--primary);
      }
    `}
`;
