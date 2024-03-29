import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import { NextUIProvider } from '@nextui-org/react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import './index.css'
import Routes from './routes'
// import { AuthProvider } from './contexts/UserContext'

const darkTheme = createTheme({
  type: 'dark'
  // theme: {
  //   colors: {...},
  // }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <NextUIProvider theme={darkTheme}>
        <Routes />
      </NextUIProvider>
    </HashRouter>
  </React.StrictMode>
)
