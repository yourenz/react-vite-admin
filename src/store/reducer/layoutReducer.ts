import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// Define a type for the slice state
interface LayoutState {
  collapsed: boolean
  openKeys: string[]
}

// Define the initial state using that type
const initialState: LayoutState = {
  collapsed: true,
  openKeys: ['/'],
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
  },
})

export const { handleCollapsed, handleOpenkeys } = layoutSlice.actions

export default layoutSlice.reducer
