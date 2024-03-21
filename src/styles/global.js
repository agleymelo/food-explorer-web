import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './device-breakpoints'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.75rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1rem;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, label, strong, textarea, span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  a, button, h2, h3 {
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }
`
