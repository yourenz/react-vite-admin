import { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { basename } from '@/utils/global'
import { routeFlat } from '@/utils/utils'
import Login from '@/views/login'

import Container from './components/Container'

const whiteList = [
  {
    path: '/login',
    title: '登录',
  },
  {
    path: '/403',
    title: '403',
  },
  {
    path: '/404',
    title: '404',
  },
]

const whiteListPath = whiteList.map((item) => item.path)

const Layouts: React.FC = (): JSX.Element => {
  const flatRoute = routeFlat(routes)
  const { pathname } = useLocation()

  useEffect(() => {
    if (whiteListPath.includes(pathname)) {
      const routeIndex = whiteListPath.findIndex((item) => item === pathname)
      window.document.title = `${whiteList[routeIndex].title} | ${basename}`
      return
    }
    window.document.title = `${flatRoute.find((item) => item.path === pathname)?.name} | ${basename}`
  }, [flatRoute, pathname])

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
