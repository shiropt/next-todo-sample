import create from 'zustand'
import { devtools } from 'zustand/middleware'

export type Todo = {
  id: number
  title: string
  fixedDate: Date
  isDone: boolean
  importance: '低' | '中' | '高'
}

type State = {
  todoList: Todo[]
  getter: () => { todoLength: number; doneTodoLength: number }
  setTodoList: (todoList: Todo[]) => void
}

export const useTodoStore = create<State>()(
  devtools((set, get) => ({
    todoList: [],
    getter: () => {
      return {
        todoLength: get().todoList.length,
        doneTodoLength: get().todoList.filter((todo) => todo.isDone).length,
      }
    },
    setTodoList: (todoList: Todo[]) => {
      set({ todoList })
    },
  }))
)
