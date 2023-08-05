import styled, { css } from 'styled-components';
import { CardShepherd } from '../cards';

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
  display: flex;
  gap: 2.4rem;
  margin-top: 5.6rem;

  flex-wrap: wrap;
`;

export const Card = styled(CardShepherd)`
  &:last-child {
    padding-right: 0;
  }
`;
