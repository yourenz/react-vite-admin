import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { basename } from '@/utils/config'
import { routeFlatWithFather } from '@/utils/utils'

const index = {
  path: `/${basename}/`,
  name: 'dashborad',
}

const useBreadcrumb = (): RouteObj[] => {
  const { pathname } = useLocation()

  const pathArr = pathname
    .split('/')
    .filter((item) => item)
    .map((item) => '/' + item)

  if (!pathArr.length) {
    return [index]
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

  const BreadcrumbArr = [index, ...newRoute.filter((item) => pathArr.includes(item.lastPath))]

  return BreadcrumbArr
}

export default useBreadcrumb
