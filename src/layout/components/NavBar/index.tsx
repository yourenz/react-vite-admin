import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Layout, Row, Tag } from 'antd'
import { createElement } from 'react'

import useBreadcrumb from '@/hooks/useBreadcrumb'
import useTagsView from '@/hooks/useTagsView'
import { useAppDispatch, useAppSelector } from '@/store'
import { handleCollapsed } from '@/store/reducer/layoutReducer'

import DropdownMenu from '../DropdownMenu'
import styles from './index.module.scss'

const { Header } = Layout

const NavBar = (): JSX.Element => {
  const breadcrumbArr = useBreadcrumb()
  const { collapsed } = useAppSelector((state) => state.layoutReducer)
  const dispatch = useAppDispatch()
  const toggle = () => dispatch(handleCollapsed())
  const { deleteTag, tagsView, clickTag } = useTagsView()

  return (
    <Col>
      <Header className={styles.layoutNavbar}>
        <Row>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: toggle,
          })}
          <Breadcrumb separator='>' className={styles.breadcrumb}>
            {breadcrumbArr.map((item, index) => {
              return index === 0 ? (
                <Breadcrumb.Item href={item.path} key={item.path}>
                  <span> {item.name}</span>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>
              )
            })}
          </Breadcrumb>
        </Row>
        <DropdownMenu />
      </Header>
      <div className={styles.TagsView}>
        {tagsView.map((item) => (
          <Tag
            key={item.path}
            color={item.active ? '#1890ff' : ''}
            closable={item.name !== 'dashboard'}
            onClose={(e) => deleteTag(e, item)}
            onClick={() => clickTag(item)}
          >
            {item.name}
          </Tag>
        ))}
      </div>
    </Col>
  )
}

export default NavBar
