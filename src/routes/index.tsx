import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

// import useAuth, { AuthProvider } from '../contexts/UserContext'
import { AuthProvider } from '../contexts/UserContext'

import { LoginPage } from '../pages/Login'
import { Welcome } from '../pages/Welcome'

import routes from './routes'
import useUser from '../hooks/useUser'

// TODO: redireccionar ruta de juego
const PrivateRoute = (props: any) => {
  const location = useLocation()
  const { state, isLogged } = useUser()

  return !!(state.user || isLogged()) ? (
    <Route {...props} />
  ) : (
    // <Redirect to={location.pathname} />
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
        <Route path="/login" exact component={LoginPage} />
        {routes.map((props) => (
          <PrivateRoute {...props} key={props.path as string} />
        ))}
        <Route path="/" exact component={Welcome} />
        <Route path="*" exact component={() => <div> Página no encontrada </div>} />
      </Switch>
    </AuthProvider>
  )
}

{
  /* </AuthProvider> */
}
export default Routes
