import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-dark: #121214;
    --background-light: #F1F2F0;

    --black: #202024;
    --black-light: #5B5D5F;
    --black-dark: #19181B;

    --white: #F5F5F5;
    --white-light: #F6F6F6;
    --white-dark: #B8B8B8;

    --primary: #5FE36A;
    --primary-light: #64FA9B;
    --primary-dark: #44AE7A;

    --secondary: #59F0BB;
    --secondary-light: #82F8A2;
    --secondary-dark: #3FAFB8;

    --auxiliary: #9376E3;
    --auxiliary-light: #98A1ED;
    --auxiliary-dark: #9256AD;

    --gray-100: #3A3A3A;
    --gray-200: #4A4A4A;
    --gray-300: #5A5A5A;
    --gray-400: #6A6A6A;
    --gray-500: #7A7A7A;
    --gray-600: #8A8A8A;
    --gray-700: #9A9A9A;

    --error: #DB0025;
    --error-light: #FB657F;
    --error-dark: #C30500;

    --warning: #F9C117;
    --warning-light: #FCD55D;
    --warning-dark: #C19611;

    --info: #0B30DB;
    --info-light: #5774F6;
    --info-dark: #132C9F;

    --success: #00DB29;
    --success-light: #95F066;
    --success-dark: #00AA66;

    --gradient-green: linear-gradient(215.11deg, #64FA9B 11.63%, #5FE36A 81.82%);
    --gradient-blue: linear-gradient(180deg, #00C6FB 0%, rgba(0, 91, 234, 0.5) 100%);
    --gradient-dark:  linear-gradient(252.76deg, rgba(40, 40, 45, 0) -15.44%, #28282D 90.31%);
    --gradient-green-light: linear-gradient(226.58deg, #64FA9B 10.45%, rgba(95, 227, 106, 0) 94.38%);
    --gradient-hite: linear-gradient(202.21deg, #FFFFFF -6.53%, rgba(255, 255, 255, 0) 98.93%);

    --shadow-green: 0px 0px 80px -30px rgba(95, 227, 106, 0.59);
    --shadow-dark: 0px 0px 80px -30px rgba(32, 32, 36, 0.7);
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    font-family: 'Mukta', sans-serif;
    font-size: 1.6rem;
    color: var(--white);

    background: var(--background-dark);

    overflow-x: hidden;
  }

  input, textarea {
    font-size: 1.6rem;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
