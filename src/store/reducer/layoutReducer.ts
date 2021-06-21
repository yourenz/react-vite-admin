import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
type FilterTag = Pick<RouteObj, 'name' | 'path'>

export interface TagsView extends FilterTag {
  active: boolean
}
interface LayoutState {
  collapsed: boolean
  openKeys: string[]
  tagsView: TagsView[]
}

// Define the initial state using that type
const initialState: LayoutState = {
  collapsed: true,
  openKeys: ['/'],
  tagsView: [
    {
      path: '/',
      name: 'dashboard',
      active: true,
    },
  ],
}

export const layoutSlice = createSlice({
  name: 'layoutReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleCollapsed: (state) => {
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    },
    handleOpenkeys: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        openKeys: action.payload,
      }
    },
    handleTagsView: (state, action: PayloadAction<TagsView[]>) => {
      return {
        ...state,
        tagsView: action.payload,
      }
    },
  },
})

export const { handleCollapsed, handleOpenkeys, handleTagsView } = layoutSlice.actions

export default layoutSlice.reducer
