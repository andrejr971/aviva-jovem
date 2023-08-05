import styled, { css } from 'styled-components';
import * as AlertDialog from '@radix-ui/react-dialog';

export const Overlay = styled(AlertDialog.Overlay)`
  ${({ theme }) => css`
    background: ${theme.colors.background}80;
    position: fixed;
    inset: 0;

    z-index: 99998;

    @keyframes openOverlay {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes closeOverlay {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    &.open {
      animation: openOverlay 0.2s ease-in-out;
    }

    &.close {
      animation: closeOverlay 0.2s ease-in-out;
    }
  `}
`;

export const Container = styled(AlertDialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    z-index: 99999;
    overflow-y: auto;
    height: 100%;

    max-width: 57.6rem;
    right: 0;
    bottom: 0;

    padding: 1.6rem;

    @keyframes openModal {
      0% {
        right: -100%;
      }

      100% {
        right: 0;
      }
    }

    @keyframes closeModal {
      0% {
        right: 0;
      }

      100% {
        right: -100%;
      }
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: 100%;

      height: auto;
      max-height: 95%;

      bottom: 0;

      @keyframes openModal {
        0% {
          bottom: -100%;
        }

        100% {
          bottom: 0;
        }
      }

      @keyframes closeModal {
        0% {
          bottom: 0;
        }

        100% {
          bottom: -100%;
        }
      }
    }

    &.open {
      animation: openModal 0.2s ease-in-out;
    }

    &.close {
      animation: closeModal 0.2s ease-in-out;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    overflow-y: auto;

    padding: 1.6rem;
    border-radius: 0.8rem;

    background: ${theme.colors.black};
    box-shadow: ${theme.effects.shadows.orange};

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.black_light};
      border-radius: 8px;
    }
  `}
`;
