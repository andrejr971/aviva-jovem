import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  margin-top: 20rem;
  position: relative;
  width: 100%;
  height: 82.2rem;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    object-fit: cover;

    z-index: -1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2.4rem;

  max-width: 141.6rem;

  margin: 0 auto;
  padding: 1.6rem;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    text-align: center;

    h3 {
      font: ${theme.fonts.titles.xlarge};
    }

    strong {
      font: ${theme.fonts.titles.large};

      span {
        background: ${theme.colors.gradient_1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `}
`;

export const GroupCard = styled.div`
  width: 100%;
  max-width: 96rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
  gap: 2.4rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  `}
`;

export const GroupButton = styled.div`
  width: 32rem;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;
