import styled, { DefaultTheme, css } from 'styled-components';
import { VariantButton } from './types';

const containerModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary}10;
    border: 0;

    &:hover {
      background: ${theme.colors.primary};
      filter: ${theme.effects.shadows.orange};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    border: 0;

    &:hover {
      filter: ${theme.effects.shadows.orange};
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    background: transparent;
    border: 0;

    &:hover {
      background: ${theme.colors.black};
      filter: ${theme.effects.shadows.dark};
    }
  `,
  full: (theme: DefaultTheme) => css`
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
  `,
  small: (theme: DefaultTheme) => css`
    height: 4rem;
    justify-content: center;
    min-width: 4rem;
    padding: 0.8rem;
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4.8rem;
    padding: 1.6rem 3.2rem;
  `,
};

type ContainerProps = {
  variant: VariantButton;
  size: 'full' | 'medium' | 'small';
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, variant, size }) => css`
    display: flex;
    height: 48px;
    padding: 16px;
    width: 100%;
    max-width: 26rem;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    color: ${theme.colors.white_light};
    font: ${theme.fonts.texts.xsmall};
    border-radius: 4px;

    transition: all 0.2s ease-in-out;

    ${containerModifier[variant](theme)};
    ${containerModifier[size](theme)};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.4rem;
  `}
`;
