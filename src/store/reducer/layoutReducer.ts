import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
interface LayoutState {
  collapsed: boolean
}

// Define the initial state using that type
const initialState: LayoutState = {
  collapsed: true,
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
  },
})

export const { handleCollapsed } = layoutSlice.actions

export default layoutSlice.reducer
