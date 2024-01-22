import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks'
import filterReducer from './reducers/filter'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})
