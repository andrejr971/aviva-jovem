import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #121210;
  backdrop-filter: blur(400px);
  z-index: 999;

  position: sticky;
  top: 0;
  left: 0;
`;

export const ContentNav = styled.nav`
  max-width: var(--container-l);
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 16px;

  svg {
    height: 56px;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      margin: 0 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .logo-aviva-desktop {
    display: inherit;
  }

  .logo-aviva-mobile {
    display: none;
  }

  @media screen and (max-width: 960px) {
    ul {
      display: none;

      margin: 0;
    }

    .logo-aviva-desktop {
      display: none;
    }

    .logo-aviva-mobile {
      display: inherit;

      width: 56px;
      height: 56px;
    }
  }
`;

export const ButtonsNav = styled.button`
  font: var(--text-6-bold);
  padding: 16px 24px;

  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;

  color: var(--white);

  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
  }
`;

export const NavMobile = styled.div`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
