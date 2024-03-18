import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  body, input, button, textarea {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;

    -webkit-font-smoothing: antialiased;
  }
`
