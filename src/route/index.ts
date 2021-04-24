import { lazy } from 'react'

const route: RouteObj[] = [
  {
    name: 'dashboard',
    path: '/',
    component: lazy(() => import('@/views/dashboard')),
  },
  {
    name: '404',
    path: '/404',
    component: lazy(() => import('@/components/NoMatch')),
    hidden: true,
  },
]

export default route
