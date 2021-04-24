import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { createElement } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { handleCollapsed } from '@/store/reducer/layoutReducer'

import DropdownMenu from '../DropdownMenu'
import styles from './index.module.scss'

const { Header } = Layout

const NavBar = (): JSX.Element => {
  const { collapsed } = useAppSelector((state) => state.layoutReducer)
  const dispatch = useAppDispatch()
  const toggle = () => dispatch(handleCollapsed())
  return (
    <Header className={styles.layoutNavbar}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: styles.trigger,
        onClick: toggle,
      })}
      <DropdownMenu />
    </Header>
  )
}

export default NavBar
