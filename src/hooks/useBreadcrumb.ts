import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { routeFlatWithFather } from '@/utils/utils'

const useBreadcrumb = (): RouteObj[] => {
  const { pathname } = useLocation()

  const pathArr = pathname
    .split('/')
    .filter((item) => item)
    .map((item) => '/' + item)

  if (!pathArr.length) {
    return [routes[0]]
  }

  const currentRoute = routes.filter((item) => item.path === pathArr[0])
  const flatRoute = routeFlatWithFather(currentRoute)

  const newRoute = flatRoute.map((item) => {
    const pathArr = item.path
      .split('/')
      .filter((item) => item)
      .map((item) => '/' + item)

    const lastPath = pathArr[pathArr.length - 1]
    return {
      ...item,
      lastPath,
    }
  })

  const BreadcrumbArr = [routes[0], ...newRoute.filter((item) => pathArr.includes(item.lastPath))]

  return BreadcrumbArr
}

export default useBreadcrumb
