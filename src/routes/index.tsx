// import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

// import useAuth, { AuthProvider } from '../contexts/UserContext'
import { AuthProvider } from '../contexts/UserContext'

import { LoginPage } from '../pages/Login'
import { Welcome } from '../pages/Welcome'

// import routes from './routes'
import useUser from '../hooks/useUser'
import { GamePage } from '../pages/GamePage'
import { GameProvider } from '../contexts/GameContext'
import { HomePage } from '../pages/HomePage'
import { globalCss } from '@nextui-org/react'
import { Pruebas } from '../pages/Pruebas'
import PanelPage from '../pages/PanelPage'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, isLogged } = useUser()
  // return <Redirect to="juego" />
  return <Route {...rest}>{!!(state.user || isLogged()) ? <Component /> : <Redirect to="/login" />}</Route>
}
const PrivateRoutes = (props: any) => {
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

const globalStyles = globalCss({
  body: {
    backgroundImage: 'url(/image.png)',
    backgroundSize: 'cover'
    // backgroundImage: `linear-gradient(to right top, #07041f, #090626, #0a072d, #0a0934, #0a0a3b, #13104a, #1f1359, #2d1568, #491b83, #681e9d, #891eb5, #ad18cd);`
  }
})

function Routes(): JSX.Element {
  globalStyles()
  return (
    <AuthProvider>
      <GameProvider>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/juego" exact component={GamePage} />

          {/* {routes.map((props) => (
            <PrivateRoutes {...props} key={props.path as string} />
          ))} */}
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/game/:id" component={GamePage} />
          <PrivateRoute path="/start/:id" component={PanelPage} />
          <PrivateRoute path="/pruebas" component={Pruebas} />

          <Route path="/" component={Welcome} />
          <Route path="*" component={() => <div> Página no encontrada </div>} />
        </Switch>
      </GameProvider>
    </AuthProvider>
  )
}

{
  /* </AuthProvider> */
}
export default Routes
