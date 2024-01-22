import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

export type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      title: 'Study JavaScript',
      description: 'Get deep on JavaScript - POO',
      priority: enums.Priority.REGULAR,
      status: enums.Status.DONE
    },
    {
      id: 2,
      title: 'Study TypeScript',
      description: 'Practice the enums',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING
    },
    {
      id: 3,
      title: 'Study React',
      description: 'Practice the usage of Redux/Toolkit',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING
    }
  ]
}

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((task) => task.id !== action.payload)
      ]
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id == action.payload.id)
      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    },
    statusModificator: (
      state,
      action: PayloadAction<{ id: number; done: boolean }>
    ) => {
      const taskIndex = state.items.findIndex((t) => t.id == action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex].status = action.payload.done
          ? enums.Status.DONE
          : enums.Status.PENDING
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExists = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (taskExists) {
        alert('This task already exists.')
      } else {
        const previousTask = state.items[state.items.length - 1]

        const newTask = {
          ...action.payload,
          id: previousTask ? previousTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    }
  }
})

export const { deleteTask, editTask, statusModificator, register } =
  tasksSlice.actions

export default tasksSlice.reducer
