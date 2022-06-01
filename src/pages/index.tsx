import { useEffect } from 'react'
import { TodoForm } from '../components/todoForm'
import { TodoTable } from '../components/ui/table'
import { useTodoStore } from '../store/todo'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { setTodoList } = useTodoStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('api/login')
        const json = await res.json()
        setTodoList(json)

        console.log(json)
      } catch (e) {
        console.log(e)
      }
    }
    setTimeout(() => {
      fetchData()
    }, 0)
  }, [])
  return (
    <div>
      <TodoForm />
      <TodoTable />
    </div>
  )
}

export default Home
