import { lazy } from 'react'

const route: RouteObj[] = [
  {
    name: 'dashboard',
    path: '/',
    component: lazy(() => import('@/views/dashboard')),
    iconName: 'dashboard',
  },
]

export default route
