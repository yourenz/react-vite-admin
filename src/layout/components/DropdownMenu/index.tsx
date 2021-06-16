import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { useHistory } from 'react-router'

const DropdownMenu = (): JSX.Element => {
  const { replace } = useHistory()

  const handleLogOut = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
    } else {
      sessionStorage.removeItem('token')
    }
    replace('/login')
  }

  const renderMenu = () => {
    return (
      <Menu>
        <Menu.Item key='logout' onClick={handleLogOut}>
          log out
        </Menu.Item>
      </Menu>
    )
  }
  return (
    <Dropdown overlay={renderMenu}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </a>
    </Dropdown>
  )
}

export default DropdownMenu
