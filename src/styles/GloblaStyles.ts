import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --orange: #E46713;
    --orange_dark: #DA251C;
    --orange_light: #EB582F;

    --green: #008E96;
    --green_dark: #006186;
    --green_light: #22A694;

    --white: #EFECE9;
    --white_dark: #D1D0CC;
    --white_light: #FDFBFA;

    --black: #242120;
    --black_dark: #121210;
    --black_light: #413E3E;

    --error: #EB3D3D;
    --error_dark: #D03333;
    --error_light: #F05454;

    --success: #32D957;
    --success_dark: #28BB49;
    --success_light: #50E170;

    --warning: #FFCE52;
    --warning_dark: #D9B043;
    --warnin_light: #FFD76B;

    --info: #0063F7;
    --info_dark: #004FC4;
    --info_light: #5B8DEF;

    --gray_100: #495057;
    --gray_200: #868E96;
    --gray_300: #ADB5BD;
    --gray_400: #CED4DA;
    --gray_500: #DEE2E6;
    --gray_600: #E9ECEF;

    --gradient_orange: linear-gradient(225deg, #DA251C 0%, #E46713 100%);
    --gradient_orange2: linear-gradient(227.94deg, #DA251C -26.08%, rgba(228, 103, 19, 0.07) 100%);
    --gradient_green: linear-gradient(225deg, #006186 0%, #028E95 100%);
    --gradient_white: linear-gradient(225deg, #D1CFCB 0%, #FDF9F7 100%);
    --gradient_black: linear-gradient(225deg, #252120 0%, #413E3E 100%);
    --gradient_blue: linear-gradient(225deg, #014FC3 0%, #5B8DEF 100%);
    --gradient_red: linear-gradient(225deg, #D03333 0%, #F05554 100%);

    --shadow_orange: 0px -85px 208px rgba(228, 103, 19, 0.07), 0px -25.625px 62.7059px rgba(228, 103, 19, 0.0456112), 0px -10.6433px 26.0448px rgba(228, 103, 19, 0.035), 0px -3.84948px 9.4199px rgba(228, 103, 19, 0.0243888);
    --shadow_black: 0px 12px 97px rgba(36, 33, 32, 0.19), 0px 4.3802px 35.4066px rgba(36, 33, 32, 0.131096), 0px 2.1265px 17.1892px rgba(36, 33, 32, 0.105695), 0px 1.04245px 8.42649px rgba(36, 33, 32, 0.0843048), 0px 0.412187px 3.33185px rgba(36, 33, 32, 0.0589035);

    --title_1: 500 7.2rem/130% 'Poppins', sans-serif;
    --title_2: 500 4.8rem/130% 'Poppins', sans-serif;
    --title_3: 500 3.6rem/130% 'Poppins', sans-serif;
    --title_4: 500 2.4rem/130% 'Poppins', sans-serif;

    --text_1: 400 2.4rem/130% 'Open sans', sans-serif;
    --text_2: 400 2.0rem/130% 'Open sans', sans-serif;
    --text_3: 400 1.6rem/130% 'Open sans', sans-serif;
    --text_4: 400 1.4rem/130% 'Open sans', sans-serif;

    --link: 600 1.4rem/130% 'Open sans', sans-serif;

  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100vh;
  }

  body {
    height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;

    background: var(--black_dark);

    scroll-behavior: smooth;

    font: var(--text_1);
    color: var(--white_light);

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--black);
      border-radius: 0.4rem;
    }
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--black);
    padding: 3rem;
    position: relative;
    border-radius: 0.8rem;
    padding: 3.2rem 2.4rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter .2s ease-in;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
