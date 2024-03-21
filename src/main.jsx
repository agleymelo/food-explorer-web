import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Routes } from './routes/index.routes.jsx'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'

import 'keen-slider/keen-slider.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
