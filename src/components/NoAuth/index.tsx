import { Button, Result } from 'antd'
import { useHistory } from 'react-router-dom'

const NoAuth: React.FC = (): JSX.Element => {
  const { replace } = useHistory()

  const handleClick = () => {
    replace('/login')
  }

  return (
    <div className='spin-main'>
      <Result
        status='403'
        title='403'
        subTitle='对不起，您没有权限访问此页面'
        extra={
          <Button onClick={handleClick} type='primary'>
            去登录
          </Button>
        }
      />
    </div>
  )
}

export default NoAuth
