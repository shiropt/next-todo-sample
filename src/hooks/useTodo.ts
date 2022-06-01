import { useCallback, useState } from 'react'
import { useTodoStore } from '../store/todo'
import type { Todo } from '../store/todo'

export const useTodo = () => {
  const { todoList, setTodoList, getter } = useTodoStore()

  const [state, setState] = useState<Todo>({
    id: 0,
    title: '',
    fixedDate: new Date(),
    isDone: false,
    importance: '中',
  })
  const addTodo = useCallback(() => {
    setTodoList([{ ...state, id: todoList.length + 1 }, ...todoList])
    setState({ ...state, title: '', fixedDate: new Date(), importance: '中' })
  }, [state])

  const updateValue = useCallback(
    (value: object) => {
      setState({ ...state, ...value, id: todoList.length + 1 })
    },
    [state]
  )

  const checkTodo = useCallback(
    (id: number) => {
      const index = todoList.findIndex((todo) => {
        return todo.id === id
      })
      const copy = [
        ...todoList.slice(0, index),
        { ...todoList[index], isDone: !todoList[index].isDone },
        ...todoList.slice(index + 1),
      ]
      setTodoList(copy)
    },
    [todoList]
  )
  return { todoList, state, updateValue, addTodo, checkTodo }
}
