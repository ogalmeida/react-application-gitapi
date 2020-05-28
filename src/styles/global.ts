import { createGlobalStyle } from 'styled-components';

import GithubBackground from '../assets/github-image.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #f0f0f5 url(${GithubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 32px 10px;
  }

  button {
    cursor: pointer;
  }
`;
