import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-main: ${props => props.theme.colors.main};
    --color-mainDark: ${props => props.theme.colors.mainDark};
    --color-mainLight: ${props => props.theme.colors.mainLight};
    --color-mainLighter: ${props => props.theme.colors.mainLighter};
    --color-primary: ${props => props.theme.colors.primary};
    --color-secundary: ${props => props.theme.colors.secundary};
    --color-ink: ${props => props.theme.colors.ink};
    --color-red: ${props => props.theme.colors.red};
    --color-text: ${props => props.theme.colors.text};
    --color-white: ${props => props.theme.colors.white};
    --color-whiteDark: ${props => props.theme.colors.whiteDark};
    --color-shadow: ${props => props.theme.colors.shadow};

    @media ${props => props.theme.mediaQueries.small} {
      font-size: 55%;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
      font-size: 50%;
    }
  }

  body {
    color: var(--color-ink);
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    background: #fbfbfb;
  }

  button {
    outline: none;
    border: none;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    outline: none;
    font-family: inherit;
    border: none;
  }

  textarea {
    font-family: inherit;
    color: inherit;
    resize: vertical;
  }

  a {
    text-decoration: none;
  }
`;
