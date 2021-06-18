import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import NoAuth from '@/components/NoAuth'
import NoMatch from '@/components/NoMatch'
import routes from '@/route'
import { routeFlat } from '@/utils/utils'

import NavBar from '../NavBar/index'
import styles from './index.module.scss'
const { Content, Footer } = Layout

const Main = (): JSX.Element => {
  return (
    <Layout>
      <NavBar />
      <Content>
        <div className={styles.layoutMainContent}>
          <Suspense
            fallback={
              <div className='spin-main'>
                <Spin size='large' />
              </div>
            }
          >
            <Switch>
              {routeFlat(routes).map((route) => (
                <Route key={route.path} path={route.path} component={route.component} exact />
              ))}
              <Route key={'/404'} path={'/404'} component={NoMatch} exact />
              <Route key={'/403'} path={'/403'} component={NoAuth} exact />
              <Route
                path='*'
                render={({ location }) => (
                  <Redirect
                    to={{
                      pathname: '/404',
                      state: { from: location },
                    }}
                  />
                )}
              />
            </Switch>
          </Suspense>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Main
