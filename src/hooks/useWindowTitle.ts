import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { basename } from '@/utils/global'
import { routeFlat } from '@/utils/utils'

const whiteList = [
  {
    path: '/login',
    title: 'login',
  },
  {
    path: '/403',
    title: '403',
  },
  {
    path: '/404',
    title: '404',
  },
]

const whiteListPath = whiteList.map((item) => item.path)

const useWindowTitle = (): void => {
  const flatRoute = routeFlat(routes)
  const { pathname } = useLocation()
  if (whiteListPath.includes(pathname)) {
    const routeIndex = whiteListPath.findIndex((item) => item === pathname)
    window.document.title = `${whiteList[routeIndex].title} | ${basename}`
  } else {
    window.document.title = `${flatRoute.find((item) => item.path === pathname)?.name} | ${basename}`
  }
}

export default useWindowTitle
