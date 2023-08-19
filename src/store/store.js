import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './HomeSlice.js';

export default configureStore({
  reducer: {
    home: homeSlice,
  }
})

