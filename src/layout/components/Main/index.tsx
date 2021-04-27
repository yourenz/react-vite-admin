import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import routes from '@/route'
import { useAppSelector } from '@/store'
import { routeFlat } from '@/utils/utils'

import NavBar from '../NavBar/index'
import styles from './index.module.scss'
const { Content, Footer } = Layout

const Main = (): JSX.Element => {
  const { collapsed } = useAppSelector((state) => state.layoutReducer)

  return (
    <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
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
