import { Layout } from 'antd'

import Main from '../Main'
import SideBar from '../SiderBar'

const Container = (): JSX.Element => {
  return (
    <Layout style={{ height: '100%' }}>
      <SideBar />
      <Main />
    </Layout>
  )
}

export default Container
