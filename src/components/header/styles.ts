import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.black_light};
    background: ${theme.colors.background};

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;

    position: sticky;
    top: 0;

    z-index: 9999;
  `}
`;

export const Content = styled.div`
  max-width: 141.6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    > svg {
      height: 4.8rem;
    }
  `}
`;

export const GroupButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;

  ${media.greaterThan('medium')`
    gap: 2.4rem;

    button {
      max-width: 16.8rem;
      justify-content: center;
    }
  `}
`;
