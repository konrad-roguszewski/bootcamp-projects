import React from 'react'
import { Todo } from './Todo'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from "../../../firebase"

export const TodoList = () => {
  const { currentUser } = useAuth()

  const sampleTodos = [
    {
      id: 1,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      date: "2021-06-28",
      value: "50",
      note: "taxi",
      category: "2",
    },
    {
      id: 2,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      date: "2021-06-29",
      value: "100",
      note: "restaurant",
      category: "1",
    },
  ];

  return (
    <ul className="TodoList">
      {sampleTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
