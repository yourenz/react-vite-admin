import { Layout, Menu } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

import SvgIcon from '@/components/SvgIcon'
import routes from '@/route'
import { useAppDispatch, useAppSelector } from '@/store'
import { handleOpenkeys } from '@/store/reducer/layoutReducer'

import styles from './index.module.scss'

const { Sider } = Layout
const { SubMenu } = Menu

const SideBar = (): JSX.Element => {
  const filterRoute = routes.filter((item) => !item.hidden)
  const rootSubmenuKeys = filterRoute.map((item) => item.path)
  const history = useHistory()
  const { pathname } = useLocation()
  const { collapsed, openKeys } = useAppSelector((state) => state.layoutReducer)
  const dispatch = useAppDispatch()

  const onOpenChange = (keys: React.Key[]): void => {
    const copyKey = keys as string[]
    const latestOpenKey = copyKey[copyKey.length - 1]
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      dispatch(handleOpenkeys(copyKey))
    } else {
      dispatch(handleOpenkeys(latestOpenKey ? [latestOpenKey] : []))
    }
  }

  const handleClick = (item: RouteObj) => {
    if (item.path === pathname) return
    history.push(item.path)
  }

  const deepRoute = (menuData: RouteObj[]) => {
    return menuData.map((item) => {
      if (!item.children?.length) {
        return (
          <Menu.Item
            key={item.path}
            icon={
              <span>
                <SvgIcon name={item.iconName || ''} />
              </span>
            }
            onClick={() => handleClick(item)}
          >
            {item.name}
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.path}
            title={item.name}
            icon={
              <span className='ant-menu-item-icon'>
                <SvgIcon name={item.iconName || ''} />
              </span>
            }
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
      <Menu theme='dark' mode='inline' openKeys={openKeys} selectedKeys={[pathname]} onOpenChange={onOpenChange}>
        {deepRoute(filterRoute)}
      </Menu>
    </Sider>
  )
}

export default SideBar
