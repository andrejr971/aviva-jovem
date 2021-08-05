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

    button {
      max-width: 26rem;
    }

    @media screen and (max-width: 800px) {
      & {
        padding: 0.8rem;
      }

      nav.navbar {
        display: none;
      }

      img.logotipo {
        max-width: 15rem;
      }

      /* img.logotipo {
        display: none;
      }

      img.logo {
        display: block;
        width: 100%;
        max-width: 4.8rem;
      } */
    }
  }
`;
