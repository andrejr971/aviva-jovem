import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100vh;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.white_light};
      font: ${theme.fonts.texts.medium_s};
    }

    button {
      cursor: pointer;
    }
  `}
`;
