import { SmileTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useHistory } from 'react-router-dom'

import styles from './index.module.scss'
interface LoginInfo {
  userName: string
  password: string
  remember: boolean
}

const Login: React.FC = (): JSX.Element => {
  const { replace } = useHistory()

  const onFinish = (values: LoginInfo): void => {
    if (values.remember) {
      localStorage.setItem('token', 'admin')
    } else {
      sessionStorage.setItem('token', 'admin')
    }
    replace('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginView}>
        <SmileTwoTone className={styles.logo} />
        <Form onFinish={onFinish} initialValues={{ remember: true }}>
          <Form.Item
            name='userName'
            rules={[{ required: true, message: 'Please input your username!' }]}
            className={styles.formItemView}
          >
            <Input placeholder='any' className={styles.inputView} />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
            className={styles.formItemView}
          >
            <Input.Password placeholder='any' className={styles.inputView} />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked' className={styles.formItemView}>
            <Checkbox>remember me?</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className={styles.loginbtn}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
