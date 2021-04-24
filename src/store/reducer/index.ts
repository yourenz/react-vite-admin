import { combineReducers } from '@reduxjs/toolkit'

import layoutReducer from './layoutReducer'

const allReducer = combineReducers({
  layoutReducer,
})

export default allReducer
