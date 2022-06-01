import { Table } from '@mantine/core'
import { Square, Checkbox } from 'tabler-icons-react'
import { useTodo } from '../../hooks/useTodo'
import { useUtils } from '../../hooks/useUtils'
import type { FC } from 'react'

export const TodoTable: FC = () => {
  const { todoList, checkTodo } = useTodo()
  const { createDate } = useUtils()

  return (
    <Table>
      <thead>
        <tr>
          <th>完了</th>
          <th>Todo</th>
          <th>期日</th>
          <th>重要度</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <tr key={todo.id}>
            <td className='cursor-pointer' onClick={() => checkTodo(todo.id)}>
              {todo.isDone ? (
                <Checkbox size={32} strokeWidth={1.5} color={'#79d287'} />
              ) : (
                <Square size={32} strokeWidth={0.5} color={'#79d287'} />
              )}
            </td>
            <td>{todo.title}</td>
            <td>{createDate(todo.fixedDate)}</td>
            <td>{todo.importance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
