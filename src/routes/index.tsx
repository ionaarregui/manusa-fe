import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

// import useAuth, { AuthProvider } from '../contexts/UserContext'
import { AuthProvider } from '../contexts/UserContext'

import { LoginPage } from '../pages/Login'
import { Welcome } from '../pages/Welcome'

import routes from './routes'

const PrivateRoute = (props: any) => {
  const location = useLocation()
  // const { authed } = useAuth()

  // return false ? (
  return true ? (
    // location.pathname === '/' || location.pathname === '/panel' ? (
    location.pathname === '/' ? (
      <Redirect to="/panel/novedades" />
    ) : (
      <Route {...props} />
    )
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: location }
      }}
    />
  )
}

const Routes = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/login" component={LoginPage} />
        {routes.map((props) => (
          <PrivateRoute {...props} key={props.path as string} />
        ))}
        <Route path="/" component={Welcome} />
        <Route path="*" component={() => <div> Página no encontrada </div>} />
      </Switch>
    </AuthProvider>
  )
}

export default Routes