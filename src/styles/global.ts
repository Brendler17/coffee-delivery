import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  &:focus {
    border: 0;
    outline: 0;
  }
`;
