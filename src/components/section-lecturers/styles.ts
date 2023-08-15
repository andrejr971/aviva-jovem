import styled, { css } from 'styled-components';
import { CardShepherd } from '../cards';
import media from 'styled-media-query';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 141.6rem;

    margin: 0 auto;
    margin-top: 20rem;

    @media screen and (max-width: 640px) {
      padding: 1.6rem;
    }

    h3 {
      font: ${theme.fonts.titles.large};

      display: flex;
      gap: 0.8rem;

      span {
        background: ${theme.colors.gradient_1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  gap: 2.4rem;

  margin-top: 4rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  `}

  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  `}
`;

export const Card = styled(CardShepherd)`
  max-width: 100%;

  &:last-child {
    padding-right: 0;
  }
`;
