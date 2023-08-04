import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;

    @media screen and (max-width: 1140px) {
      padding: 128px 8px;
      max-width: 100%;
    }

    @media screen and (max-width: 640px) {
      padding: 1.6rem;
    }

    header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      max-width: 141.6rem;
      margin: 0 auto;
    }

    h3 {
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

export const GroupButtons = styled.div`
  display: flex;
  gap: 0.4rem;

  ${media.lessThan('medium')`
    width: 100%;
    margin-top: 4rem;
    justify-content: flex-end;
  `}
`;

export const ContentSlider = styled.div`
  margin-top: 5.6rem;
  width: 100%;
  max-width: calc(100% - 256px);
  margin-left: auto;

  display: flex;

  @media screen and (max-width: 1700px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    border-radius: 4px;
    width: 3.2rem;
    height: 3.2rem;

    transition: all 0.2s ease-in-out;

    color: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.black};
      filter: ${theme.effects.shadows.dark};
    }
  `}
`;
