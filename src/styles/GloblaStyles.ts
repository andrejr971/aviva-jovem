import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #E46713;
    --primary-light: #EB582F;
    --primary-dark: #DA251C;

    --secondary: #008E96;
    --secondary-light: #22A694;
    --secondary-dark: #006186;

    --white: #EFECE9;
    --white-light: #FDFBFA;
    --white-dark: #D1D0CC;

    --black: #242120;
    --black-light: #413E3E;
    --black-dark: #121210;

    --red: #EB3D3D;
    --red-light: #F05454;
    --red-dark: #D03333;

    --green: #32D957;
    --green-light: #50E170;
    --green-dark: #28BB49;

    --yellow: #FFCE52;
    --yellow-light: #FFD76B;
    --yellow-dark: #D9B043;

    --blue: #0063F7;
    --blue-light: #5B8DEF;
    --blue-dark: #004FC4;

    --gray-1: #495057;
    --gray-2: #868E96;
    --gray-3: #ADB5BD;
    --gray-4: #CED4DA;
    --gray-5: #DEE2E6;
    --gray-6: #E9ECEF;

    --gradient-1: linear-gradient(225deg, #DA251C 0%, #E46713 100%);
    --gradient-2: linear-gradient(225deg, #006186 0%, #028E95 100%);
    --gradient-3: linear-gradient(225deg, #D1CFCB 0%, #FDF9F7 100%);
    --gradient-4: linear-gradient(225deg, #252120 0%, #413E3E 100%);
    --gradient-5: linear-gradient(225deg, #014FC3 0%, #5B8DEF 100%);
    --gradient-6: linear-gradient(225deg, #D03333 0%, #F05554 100%);

    --title-1: normal 500 9.6rem 'Poppins', sans-serif;
    --title-2: normal 500 7.2rem 'Poppins', sans-serif;
    --title-3: normal 500 4.8rem 'Poppins', sans-serif;
    --title-4: normal 500 3.2rem 'Poppins', sans-serif;
    --title-5: normal 500 2.4rem 'Poppins', sans-serif;
    --title-6: normal 500 2rem 'Poppins', sans-serif;

    --text-1: normal 400 4.0rem 'Open Sans', sans-serif;
    --text-2: normal 400 3.2rem 'Open Sans', sans-serif;
    --text-3: normal 400 2.4rem 'Open Sans', sans-serif;
    --text-4: normal 400 2rem 'Open Sans', sans-serif;
    --text-4-bold: normal 600 2rem 'Open Sans', sans-serif;
    --text-5: normal 400 1.8rem 'Open Sans', sans-serif;
    --text-6: normal 400 1.6rem 'Open Sans', sans-serif;
    --text-6-bold: normal 600 1.6rem 'Open Sans', sans-serif;

    --gap-1: 8px;
    --gap-2: 16px;
    --gap-3: 24px;
    --gap-4: 32px;
    --gap-5: 48px;
    --gap-6: 64px;
    --gap-7: 72px;
    --gap-8: 96px;
    --gap-9: 128px;

    --container-xl: 1440px;
    --container-l: 1216px;
    --container-m: 960px;
    --container-s: 620px;
    --container-xs: 340px;
    --gutter: 32px;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    background: var(--white-light);
    color: var(--black-dark);
  }

  button {
    cursor: pointer;
  }

  p {
    font: var(--text-3);
    line-height: 130%;
  }

  .container {
    max-width: 1216px;
    margin: 0 auto;
    padding: 128px 24px;
    /*display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;*/
    overflow: hidden;
  }

  .container::after {
    content: '';
    display: table;
    clear: both;
  }

  .title-3 {
    font: var(--title-3);

    margin-bottom: 24px;

    z-index: 1;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 20%;
      height: 48px;
      background: var(--primary);
      z-index: -1;

      bottom: -10px;
      left: -10px;

      opacity: 0.8;
    }

    @media screen and (max-width: 640px) {
      font-size: 4.8rem;

      &::before {
        width: 40%;

        left: 10px;
      }
    }
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

    z-index: 9999;

    color: var(--white);
  }

  .react-modal-content {
    width: 100%;
    max-width: 720px;
    background: var(--black);
    padding: 3rem;
    position: relative;
    border-radius: 0.8rem;
    padding: 3.2rem 2.4rem;
  }

  .react-modal-overlay-banner {
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

    z-index: 9999;

    color: var(--white);
  }

  .react-modal-content-banner {
    max-width: 1080px;
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

  @media screen and (max-width: 960px) {
    .container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      padding: 96px 16px;
    }
  }

  .border {
    border: 1px solid red;
  }

  .hero {
    height: 70vh;
  }


  .row {
    // clearfix
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .h-100 {
    height: 100vh;
  }

  .h-100p {
    height: 100%;
  }

  .flex {
    display: flex;
  }

  .flex-start-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  .flex-end-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }
  .flex-start-column {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-center-column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .flex-space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .flex-column {
    flex-direction: column;
  }

  .relative {
    position: relative;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-item-1 {
    flex: 1 1 360px;
  }

  .flex-item-2 {
    flex: 2 1 360px;
  }

  .flex-item-3 {
    flex: 3 1 360px;
  }

  .flex-item-4 {
    flex: 4 1 360px;
  }

  .flex-item-5 {
    flex: 5 1 360px;
  }

  .flex-auto {
    flex: 1 1 auto;
  }

  // Width's
  .w-auto {
    width: auto;
  }
  .h-auto {
    height: auto !important;
  }
  .w-100 {
    width: 100%;
  }
  .w-75 {
    width: 75%;
  }
  .w-50 {
    width: 50%;
  }
  .w-25 {
    width: 25%;
  }


  .s-0 {
    margin: 0;
    padding: 0;
  }

  .mt-110 {
    margin-top: 110px;
  }

  .mt-80 {
    margin-top: 88px;
  }

  .ml-40 {
    margin-left: 40px;
  }

  .space-220 {
    padding: 220px 24px;
  }

  .m-0 {
    margin: 0 !important;
  }
  .m-1 {
    margin: var(--gap-1) !important;
  }
  .m-2 {
    margin: var(--gap-2) !important;
  }
  .m-3 {
    margin: var(--gap-3) !important;
  }
  .m-4 {
    margin: var(--gap-4) !important;
  }
  .m-5 {
    margin: var(--gap-5) !important;
  }
  .m-6 {
    margin: var(--gap-6) !important;
  }
  .m-7 {
    margin: var(--gap-7) !important;
  }
  .m-8 {
    margin: var(--gap-8) !important;
  }
  .m-9 {
    margin: var(--gap-9) !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }
  .mt-1 {
    margin-top: var(--gap-1) !important;
  }
  .mt-2 {
    margin-top: var(--gap-2) !important;
  }
  .mt-3 {
    margin-top: var(--gap-3) !important;
  }
  .mt-4 {
    margin-top: var(--gap-4) !important;
  }
  .mt-5 {
    margin-top: var(--gap-5) !important;
  }
  .mt-6 {
    margin-top: var(--gap-6) !important;
  }
  .mt-7 {
    margin-top: var(--gap-7) !important;
  }
  .mt-8 {
    margin-top: var(--gap-8) !important;
  }
  .mt-9 {
    margin-top: var(--gap-9) !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }
  .ml-1 {
    margin-left: var(--gap-1) !important;
  }
  .ml-2 {
    margin-left: var(--gap-2) !important;
  }
  .ml-3 {
    margin-left: var(--gap-3) !important;
  }
  .ml-4 {
    margin-left: var(--gap-4) !important;
  }
  .ml-5 {
    margin-left: var(--gap-5) !important;
  }
  .ml-6 {
    margin-left: var(--gap-6) !important;
  }
  .ml-7 {
    margin-left: var(--gap-7) !important;
  }
  .ml-8 {
    margin-left: var(--gap-8) !important;
  }
  .ml-9 {
    margin-left: var(--gap-9) !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }
  .mr-1 {
    margin-right: var(--gap-1) !important;
  }
  .mr-2 {
    margin-right: var(--gap-2) !important;
  }
  .mr-3 {
    margin-right: var(--gap-3) !important;
  }
  .mr-4 {
    margin-right: var(--gap-4) !important;
  }
  .mr-5 {
    margin-right: var(--gap-5) !important;
  }
  .mr-6 {
    margin-right: var(--gap-6) !important;
  }
  .mr-7 {
    margin-right: var(--gap-7) !important;
  }
  .mr-8 {
    margin-right: var(--gap-8) !important;
  }
  .mr-9 {
    margin-right: var(--gap-9) !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mb-1 {
    margin-bottom: var(--gap-1) !important;
  }
  .mb-2 {
    margin-bottom: var(--gap-2) !important;
  }
  .mb-3 {
    margin-bottom: var(--gap-3) !important;
  }
  .mb-4 {
    margin-bottom: var(--gap-4) !important;
  }
  .mb-5 {
    margin-bottom: var(--gap-5) !important;
  }
  .mb-6 {
    margin-bottom: var(--gap-6) !important;
  }
  .mb-7 {
    margin-bottom: var(--gap-7) !important;
  }
  .mb-8 {
    margin-bottom: var(--gap-8) !important;
  }
  .mb-9 {
    margin-bottom: var(--gap-9) !important;
  }

  .mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .mx-1 {
    margin-left: var(--gap-1) !important;
    margin-right: var(--gap-1) !important;
  }
  .mx-2 {
    margin-left: var(--gap-2) !important;
    margin-right: var(--gap-2) !important;
  }
  .mx-3 {
    margin-left: var(--gap-3) !important;
    margin-right: var(--gap-3) !important;
  }
  .mx-4 {
    margin-left: var(--gap-4) !important;
    margin-right: var(--gap-4) !important;
  }
  .mx-5 {
    margin-left: var(--gap-5) !important;
    margin-right: var(--gap-5) !important;
  }
  .mx-6 {
    margin-left: var(--gap-6) !important;
    margin-right: var(--gap-6) !important;
  }
  .mx-7 {
    margin-left: var(--gap-7) !important;
    margin-right: var(--gap-7) !important;
  }
  .mx-8 {
    margin-left: var(--gap-8) !important;
    margin-right: var(--gap-8) !important;
  }
  .mx-9 {
    margin-left: var(--gap-9) !important;
    margin-right: var(--gap-9) !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-1 {
    margin-top: var(--gap-1) !important;
    margin-bottom: var(--gap-1) !important;
  }
  .my-2 {
    margin-top: var(--gap-2) !important;
    margin-bottom: var(--gap-2) !important;
  }
  .my-3 {
    margin-top: var(--gap-3) !important;
    margin-bottom: var(--gap-3) !important;
  }
  .my-4 {
    margin-top: var(--gap-4) !important;
    margin-bottom: var(--gap-4) !important;
  }
  .my-5 {
    margin-top: var(--gap-5) !important;
    margin-bottom: var(--gap-5) !important;
  }
  .my-6 {
    margin-top: var(--gap-6) !important;
    margin-bottom: var(--gap-6) !important;
  }
  .my-7 {
    margin-top: var(--gap-7) !important;
    margin-bottom: var(--gap-7) !important;
  }
  .my-8 {
    margin-top: var(--gap-8) !important;
    margin-bottom: var(--gap-8) !important;
  }
  .my-9 {
    margin-top: var(--gap-9) !important;
    margin-bottom: var(--gap-9) !important;
  }

  .p-0 {
    padding: 0 !important;
  }
  .p-1 {
    padding: var(--gap-1) !important;
  }
  .p-2 {
    padding: var(--gap-2) !important;
  }
  .p-3 {
    padding: var(--gap-3) !important;
  }
  .p-4 {
    padding: var(--gap-4) !important;
  }
  .p-5 {
    padding: var(--gap-5) !important;
  }
  .p-6 {
    padding: var(--gap-6) !important;
  }
  .p-7 {
    padding: var(--gap-7) !important;
  }
  .p-8 {
    padding: var(--gap-8) !important;
  }
  .p-9 {
    padding: var(--gap-9) !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }
  .pt-1 {
    padding-top: var(--gap-1) !important;
  }
  .pt-2 {
    padding-top: var(--gap-2) !important;
  }
  .pt-3 {
    padding-top: var(--gap-3) !important;
  }
  .pt-4 {
    padding-top: var(--gap-4) !important;
  }
  .pt-5 {
    padding-top: var(--gap-5) !important;
  }
  .pt-6 {
    padding-top: var(--gap-6) !important;
  }
  .pt-7 {
    padding-top: var(--gap-7) !important;
  }
  .pt-8 {
    padding-top: var(--gap-8) !important;
  }
  .pt-9 {
    padding-top: var(--gap-9) !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }
  .pl-1 {
    padding-left: var(--gap-1) !important;
  }
  .pl-2 {
    padding-left: var(--gap-2) !important;
  }
  .pl-3 {
    padding-left: var(--gap-3) !important;
  }
  .pl-4 {
    padding-left: var(--gap-4) !important;
  }
  .pl-5 {
    padding-left: var(--gap-5) !important;
  }
  .pl-6 {
    padding-left: var(--gap-6) !important;
  }
  .pl-7 {
    padding-left: var(--gap-7) !important;
  }
  .pl-8 {
    padding-left: var(--gap-8) !important;
  }
  .pl-9 {
    padding-left: var(--gap-9) !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }
  .pr-1 {
    padding-right: var(--gap-1) !important;
  }
  .pr-2 {
    padding-right: var(--gap-2) !important;
  }
  .pr-3 {
    padding-right: var(--gap-3) !important;
  }
  .pr-4 {
    padding-right: var(--gap-4) !important;
  }
  .pr-5 {
    padding-right: var(--gap-5) !important;
  }
  .pr-6 {
    padding-right: var(--gap-6) !important;
  }
  .pr-7 {
    padding-right: var(--gap-7) !important;
  }
  .pr-8 {
    padding-right: var(--gap-8) !important;
  }
  .pr-9 {
    padding-right: var(--gap-9) !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pb-1 {
    padding-bottom: var(--gap-1) !important;
  }
  .pb-2 {
    padding-bottom: var(--gap-2) !important;
  }
  .pb-3 {
    padding-bottom: var(--gap-3) !important;
  }
  .pb-4 {
    padding-bottom: var(--gap-4) !important;
  }
  .pb-5 {
    padding-bottom: var(--gap-5) !important;
  }
  .pb-6 {
    padding-bottom: var(--gap-6) !important;
  }
  .pb-7 {
    padding-bottom: var(--gap-7) !important;
  }
  .pb-8 {
    padding-bottom: var(--gap-8) !important;
  }
  .pb-9 {
    padding-bottom: var(--gap-9) !important;
  }

  .px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .px-1 {
    padding-left: var(--gap-1) !important;
    padding-right: var(--gap-1) !important;
  }
  .px-2 {
    padding-left: var(--gap-2) !important;
    padding-right: var(--gap-2) !important;
  }
  .px-3 {
    padding-left: var(--gap-3) !important;
    padding-right: var(--gap-3) !important;
  }
  .px-4 {
    padding-left: var(--gap-4) !important;
    padding-right: var(--gap-4) !important;
  }
  .px-5 {
    padding-left: var(--gap-5) !important;
    padding-right: var(--gap-5) !important;
  }
  .px-6 {
    padding-left: var(--gap-6) !important;
    padding-right: var(--gap-6) !important;
  }
  .px-7 {
    padding-left: var(--gap-7) !important;
    padding-right: var(--gap-7) !important;
  }
  .px-8 {
    padding-left: var(--gap-8) !important;
    padding-right: var(--gap-8) !important;
  }
  .px-9 {
    padding-left: var(--gap-9) !important;
    padding-right: var(--gap-9) !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-1 {
    padding-top: var(--gap-1) !important;
    padding-bottom: var(--gap-1) !important;
  }
  .py-2 {
    padding-top: var(--gap-2) !important;
    padding-bottom: var(--gap-2) !important;
  }
  .py-3 {
    padding-top: var(--gap-3) !important;
    padding-bottom: var(--gap-3) !important;
  }
  .py-4 {
    padding-top: var(--gap-4) !important;
    padding-bottom: var(--gap-4) !important;
  }
  .py-5 {
    padding-top: var(--gap-5) !important;
    padding-bottom: var(--gap-5) !important;
  }
  .py-6 {
    padding-top: var(--gap-6) !important;
    padding-bottom: var(--gap-6) !important;
  }
  .py-7 {
    padding-top: var(--gap-7) !important;
    padding-bottom: var(--gap-7) !important;
  }
  .py-8 {
    padding-top: var(--gap-8) !important;
    padding-bottom: var(--gap-8) !important;
  }
  .py-9 {
    padding-top: var(--gap-9) !important;
    padding-bottom: var(--gap-9) !important;
  }

  .grid-1 {
  width: calc(8.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-1 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-2 {
  width: calc(16.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-2 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-3 {
  width: calc(25% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-3 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-4 {
  width: calc(33.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-4 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-5 {
  width: calc(41.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-5 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-6 {
  width: calc(50% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-6 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-7 {
  width: calc(58.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-7 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-8 {
  width: calc(66.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-8 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-9 {
  width: calc(75% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-9 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-10 {
  width: calc(83.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-10 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-11 {
  width: calc(91.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-11 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-12 {
  width: calc(100% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

@media screen and (max-width: 960px) {
  .grid-12 {
    width: calc(100% - 32px);
    float: none;
  }
}

.grid-nobreak-1 {
  width: calc(8.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-2 {
  width: calc(16.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-3 {
  width: calc(25% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-4 {
  width: calc(33.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-5 {
  width: calc(41.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-6 {
  width: calc(50% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-7 {
  width: calc(58.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-8 {
  width: calc(66.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-9 {
  width: calc(75% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-10 {
  width: calc(83.33333% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-11 {
  width: calc(91.66667% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}

.grid-nobreak-12 {
  width: calc(100% - 32px);
  margin: 16px;
  padding: 16px 0px;
  float: left;
}
`;
