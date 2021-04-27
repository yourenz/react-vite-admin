import { Layout } from 'antd'
import { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { basename } from '@/utils/global'
import { routeFlat } from '@/utils/utils'
import Login from '@/views/login'

import Main from './components/Main/index'
import SideBar from './components/SiderBar'

const Layouts: React.FC = (): JSX.Element => {
  const flatRoute = routeFlat(routes)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/login') {
      window.document.title = `login | ${basename}`
      return
    }
    window.document.title = `${flatRoute.find((item) => item.path === pathname)?.name} | ${basename}` || basename
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
            <Layout style={{ height: '100%' }}>
              <SideBar />
              <Main />
            </Layout>
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
