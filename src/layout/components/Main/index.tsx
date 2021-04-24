import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import routes from '@/route'
import { useAppSelector } from '@/store'

import NavBar from '../NavBar/index'
import styles from './index.module.scss'
const { Content, Footer } = Layout

const Main = (): JSX.Element => {
  const { collapsed } = useAppSelector((state) => state.layoutReducer)

  const eachFlat = (arr: RouteObj[], depth: number) => {
    const result: RouteObj[] = []
    ;(function flat(arr: RouteObj[], depth: number) {
      arr.forEach((item) => {
        if (item.children && item.children.length > 0 && depth > 0) {
          flat(item.children, depth - 1)
        } else {
          result.push(item)
        }
      })
    })(arr, depth)
    return result
  }

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
              {eachFlat(routes, 2).map((route) => (
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
      <Footer style={{ textAlign: 'center' }}>Enjoy（：</Footer>
    </Layout>
  )
}

export default Main
