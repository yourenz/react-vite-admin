import { Redirect, Route, Switch } from 'react-router-dom'

import useWindowTitle from '@/hooks/useWindowTitle'
import Login from '@/views/login'

import Container from './components/Container'

const Layouts: React.FC = (): JSX.Element => {
  useWindowTitle()
  const handleRouteRender = () => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      return sessionStorage.getItem('token')
    }
  }

  return (
    <Switch>
      <Route
        path='/login'
        render={({ location }) =>
          handleRouteRender() ? (
            <Redirect
              to={{
                pathname: '/404',
                state: { from: location },
              }}
            />
          ) : (
            <Login />
          )
        }
      />
      <Route
        render={({ location }) =>
          handleRouteRender() ? (
            <Container />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    </Switch>
  )
}

export default Layouts
