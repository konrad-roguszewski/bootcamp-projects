import React from 'react'
import { Todo } from './Todo'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from "../../../firebase"

export const TodoList = ({ todos }) => {
  const { currentUser } = useAuth()

  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
