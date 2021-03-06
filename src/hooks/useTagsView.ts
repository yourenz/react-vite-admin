/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import routes from '@/route'
import { useAppSelector } from '@/store'
import { handleOpenkeys, TagsView } from '@/store/reducer/layoutReducer'
import { handleTagsView } from '@/store/reducer/layoutReducer'
import { routeWhiteList } from '@/utils/config'
import { filterObject, routeFlatWithFather } from '@/utils/utils'

interface UseTagsView {
  tagsView: TagsView[]
  deleteTag: (e: React.MouseEvent<HTMLElement>, tag: TagsView) => void
  clickTag: (tag: RouteObj) => void
}

const whiteListPath = routeWhiteList.map((item) => item.path)

const useTagsView = (): UseTagsView => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (whiteListPath.includes(pathname)) return
    pushTag(pathname)
  }, [pathname])

  const dispatch = useDispatch()
  const { tagsView } = useAppSelector((state) => state.layoutReducer)
  const history = useHistory()

  const handleTagsData = (path: string) => {
    return tagsView.map((item) => {
      return {
        ...item,
        active: path === item.path,
      }
    })
  }

  const pushTag = (path: string) => {
    const pathArr = pathname
      .split('/')
      .filter((item) => item)
      .map((item) => '/' + item)

    if (!pathArr.length) {
      dispatch(handleTagsView(handleTagsData('/')))
      return
    }

    const isHave = tagsView.find((item) => item.path === path)

    if (isHave) {
      dispatch(handleTagsView(handleTagsData(path)))
    } else {
      const currentRoute = routes.filter((item) => item.path === pathArr[0])
      const flatRoute = routeFlatWithFather(currentRoute)
      const item = flatRoute.filter((item) => item.path === pathname)
      const filterItem = filterObject<RouteObj, 'path' | 'name'>(item[0], ['path', 'name'])
      const tagObj = {
        ...filterItem,
        active: true,
      }
      dispatch(handleTagsView([...handleTagsData(path), tagObj]))
    }
    dispatch(handleOpenkeys([pathArr[0]]))
  }

  const deleteTag = (e: React.MouseEvent<HTMLElement>, tag: TagsView) => {
    e.preventDefault()
    dispatch(handleTagsView(tagsView.filter((item) => item.path !== tag.path)))
    if (pathname !== tag.path) {
      return
    }
    history.push(tagsView[tagsView.length - 2].path)
  }

  const clickTag = (tag: RouteObj) => {
    dispatch(handleTagsView(handleTagsData(tag.path)))
    if (pathname === tag.path) {
      return
    }
    history.push(tag.path)
  }

  return {
    deleteTag,
    clickTag,
    tagsView,
  }
}

export default useTagsView
