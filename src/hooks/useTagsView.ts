/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/store'
import type { TagsView } from '@/store/reducer/layoutReducer'
import { handleTagsView } from '@/store/reducer/layoutReducer'
import { filterObject } from '@/utils/utils'

interface UseTagsView {
  tagsView: TagsView[]
  pushTag: (tag: RouteObj) => void
  deleteTag: (e: React.MouseEvent<HTMLElement>, tag: TagsView) => void
  clickTag: (tag: RouteObj) => void
}
const useTagsView = (): UseTagsView => {
  const { pathname } = useLocation()
  useEffect(() => {
    dispatch(handleTagsView(handleTagsData(pathname)))
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

  const pushTag = (tag: RouteObj) => {
    const isHave = tagsView.find((item) => item.path === tag.path)

    if (isHave) {
      dispatch(handleTagsView(handleTagsData(tag.path)))
    } else {
      const item = filterObject<RouteObj, 'path' | 'name'>(tag, ['path', 'name'])
      const tagObj = {
        ...item,
        active: true,
      }
      dispatch(handleTagsView([...handleTagsData(tag.path), tagObj]))
    }
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
    history.push(tag.path)
  }

  return {
    pushTag,
    deleteTag,
    clickTag,
    tagsView,
  }
}

export default useTagsView
