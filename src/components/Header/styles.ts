import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0 1.6rem;

  /* background: var(--black_dark); */
  backdrop-filter: blur(4px);

  div {
    width: 100%;
    max-width: 144rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button.btn-menu {
      display: none;
    }

    img.logotipo {
      width: 100%;
      max-width: 25rem;
    }

    img.logo {
      display: none;
    }

    nav.navbar {
      display: flex;
      justify-content: flex-end;

      ul.menu {
        display: flex;
        align-items: center;
        list-style: none;

        li {
          & + li {
            margin-left: 1.6rem;
          }

          a {
            width: 8rem;
            height: 5.6rem;
            display: flex;
            align-items: center;
            justify-content: center;

            font: var(--link);
            color: var(--white_dark);
            text-decoration: none;

            border-bottom: 3px solid transparent;
            transition: border-color 0.2s ease;

            &.active {
              color: var(--white_light);
              border-color: var(--orange);
            }

            &:hover {
              color: var(--white_light);
              border-color: var(--orange);
            }
          }
        }
      }
    }

    @media screen and (max-width: 800px) {
      & {
        padding: 0.8rem;
      }

      nav.navbar {
        display: none;
      }

      img.logotipo {
        display: none;
      }

      img.logo {
        display: block;
        width: 100%;
        max-width: 4.8rem;
      }

      button.btn-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 4.8rem;
        height: 4.8rem;
        background: none;
        border: 0;

        &:hover {
          span:last-child {
            width: 100%;
          }
        }

        span {
          display: block;
          width: 100%;
          height: 0.3rem;

          background: var(--gradient_orange);

          & + span {
            margin-top: 0.8rem;
          }

          &:last-child {
            width: 50%;
            transition: width 0.2s ease;
          }
        }
      }
    }
  }
`;
