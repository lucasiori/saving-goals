import { createGlobalStyle } from 'styled-components';
import RubikMedium from '../assets/fonts/rubikMedium.ttf';
import WorkSansRegular from '../assets/fonts/workSansRegular.ttf';
import WorkSansSemiBold from '../assets/fonts/workSansSemiBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url(${RubikMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }

  body, input, button {
    font: 16px 'Work Sans', sans-serif;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 360px) {
    body {
      font-size: 0.75rem;
    }
  }

  ul, li {
    list-style: none;
  }

  a {
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  main {
    flex: 1;
    background-color: #f4f8fa;
  }
`;
