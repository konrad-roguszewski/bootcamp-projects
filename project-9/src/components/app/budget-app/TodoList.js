import React from 'react'
import { Todo } from './Todo'

export const TodoList = () => {

  const sampleTodos = [
    {
      id: 1,
      content: 'Wynieść śmieci',
      isCompleted: false,
    },
    {
      id: 2,
      content: 'Zjeść śniadanie',
      isCompleted: false,
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
