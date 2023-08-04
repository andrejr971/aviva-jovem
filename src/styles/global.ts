import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    /* vietnamese */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 300;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
        format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
        U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 300;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
        format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 300;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
        format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
        U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
        format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
        format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
        U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
        format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 600;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
        format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
        U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 600;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
        format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 600;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLh4vSZSk.woff2)
        format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
        U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLhovSZSk.woff2)
        format('woff2');
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Saira';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/saira/v14/memjYa2wxmKQyPMrZX79wwYZQMhsyuSLiIvS.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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

      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 0.8rem;
      }

      &::-webkit-scrollbar-track {
        background: transparent !important;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.black};
        border-radius: 8px;
      }
    }

    button {
      cursor: pointer;
    }
  `}
`;
