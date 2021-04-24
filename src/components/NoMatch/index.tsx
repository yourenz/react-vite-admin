import { Button, Result } from 'antd'
import { useHistory } from 'react-router-dom'

const NoMatch: React.FC = (): JSX.Element => {
  const { replace } = useHistory()

  const handleClick = () => {
    replace('/')
  }

  return (
    <div className='spin-main'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={handleClick}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default NoMatch
