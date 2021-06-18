import { Layout } from 'antd'

import { useAppSelector } from '@/store'

import Main from '../Main'
import SideBar from '../SiderBar'

const Container = (): JSX.Element => {
  const { collapsed } = useAppSelector((state) => state.layoutReducer)

  return (
    <Layout style={{ height: '100%' }}>
      <SideBar />
      <div style={{ width: collapsed ? 80 : 200, transition: 'width 0.2s' }} />
      <Main />
    </Layout>
  )
}

export default Container
