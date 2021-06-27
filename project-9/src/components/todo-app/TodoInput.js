import React, {useState} from 'react'
import { database } from "../../firebase"

export const TodoInput = ({ todo }) => {
  const [name, setName] = useState(todo.name)

  const onUpdate = () => {
    database.todos.doc(todo.id).set({
      ...todo,
      name,
    })
  }

  const onDelete = () => {
    database.todos.doc(todo.id).delete()
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}