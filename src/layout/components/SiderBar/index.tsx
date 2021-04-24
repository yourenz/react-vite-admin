import { HomeOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import routes from '@/route'
import { useAppSelector } from '@/store'

import styles from './index.module.scss'

const { Sider } = Layout
const { SubMenu } = Menu

const SideBar = (): JSX.Element => {
  const filterRoute = routes.filter((item) => !item.hidden)
  const rootSubmenuKeys = filterRoute.map((item) => item.path)
  const [openKeys, setOpenKeys] = useState<string[]>([rootSubmenuKeys[0]])
  const history = useHistory()
  const { pathname } = useLocation()
  const { collapsed } = useAppSelector((state) => state.layoutReducer)

  const onOpenChange = (keys: React.Key[]): void => {
    const copyKey = keys as string[]
    const latestOpenKey = copyKey.find((key: string) => openKeys.indexOf(key) === -1) || ''
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(copyKey)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const handleClick = (path: string, routeItem: RouteObj[] | undefined) => {
    if (routeItem?.length) return
    history.push(path)
  }

  const deepRoute = (menuData: RouteObj[]) => {
    return menuData.map((item) => {
      if (!item.children?.length) {
        return (
          <Menu.Item key={item.path} icon={<HomeOutlined />} onClick={() => handleClick(item.path, item.children)}>
            {item.name}
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.path}
            title={item.name}
            icon={<HomeOutlined />}
            onTitleClick={() => handleClick(item.path, item.children)}
          >
            {deepRoute(item.children)}
          </SubMenu>
        )
      }
    })
  }

  return (
    <Sider className={styles.layoutSidebar} trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu theme='dark' mode='inline' openKeys={openKeys} defaultSelectedKeys={[pathname]} onOpenChange={onOpenChange}>
        {deepRoute(filterRoute)}
      </Menu>
    </Sider>
  )
}

export default SideBar
