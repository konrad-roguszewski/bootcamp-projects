import React from 'react'

export default function Todo({ todo }) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
      />
      <input
        defaultValue={todo.content}
        disabled
      />
      <button aria-label="Delete todo">x</button>
    </li>
  )
}
