interface RouteObj {
  name: string
  path: string
  component?: React.ComponentType
  children?: RouteObj[]
  hidden?: boolean
  iconName?: string
}
