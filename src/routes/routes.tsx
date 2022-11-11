import React from 'react'
import { RouteProps } from 'react-router-dom'
import { GamePage } from '../pages/GamePage'
// import Index from 'pages/Login'
// import {LoginPage} from '../pages/Login'
import { HomePage } from '../pages/HomePage'
import { Pruebas } from '../pages/Pruebas'

const routes: RouteProps[] = [
  // { path: '/', exact: true, children: <LoginPage /> },
  { path: '/home', exact: true, children: <HomePage /> },
  { path: '/game', children: <GamePage /> },
  { path: '/pruebas', children: <Pruebas /> }

  // { path: '/', exact: true, children: <Index /> },
  // { path: '/panel',  children: <Index /> },
  // { path: '/panel',  children: <Index /> }
]

export default routes
