import { useMemo } from 'react'

interface Props {
  prefix?: string
  name: string
  color?: string
}

const SvgIcon = (props: Props): JSX.Element => {
  const { prefix = 'icon', name, color = '#009aff' } = props

  const symbolId = useMemo<string>(() => `#${prefix}-${name}`, [name, prefix])

  return (
    <svg aria-hidden='true' style={{ width: '1em', height: '1em' }}>
      <use xlinkHref={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
