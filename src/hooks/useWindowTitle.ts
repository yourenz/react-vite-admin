import { useLocation } from 'react-router-dom'

import routes from '@/route'
import { basename, routeWhiteList } from '@/utils/config'
import { routeFlat } from '@/utils/utils'

const whiteListPath = routeWhiteList.map((item) => item.path)

const useWindowTitle = (): void => {
  const flatRoute = routeFlat(routes)
  const { pathname } = useLocation()
  if (whiteListPath.includes(pathname)) {
    const routeIndex = whiteListPath.findIndex((item) => item === pathname)
    window.document.title = `${routeWhiteList[routeIndex].title} | ${basename}`
  } else {
    window.document.title = `${flatRoute.find((item) => item.path === pathname)?.name} | ${basename}`
  }
}

export default useWindowTitle
