import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from "../../../firebase"

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CreateTodo = () => {
  const [option, setOption] = useState("0")
  const { currentUser } = useAuth()

  const handleCreate = (e) => {
    e.preventDefault()

    database.todos.add({
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      date: e.target.date.value,
      amount: parseInt(e.target.amount.value),
      note: e.target.note.value,
      category: e.target.category.value,
    })
  }

  return (
    <section>
      <Form onSubmit={handleCreate}>
        <input
          type="date"
          name="date"
          required
        />
        <input
          type="text"
          placeholder="Amount of entry"
          name="amount"
          required
        />
        <input
          type="text"
          placeholder="Leave a note here"
          name="note"
          required
        />
        <select
          value={option}
          onChange={(e) => {setOption(e.target.value)}}
          name="category"
          required
        >
          <option value="0" disabled>--Category--</option>
          <option value="1">Food</option>
          <option value="2">Transport</option>
          <option value="3">Accommodation</option>
        </select>
        <button type="submit">Submit</button>
      </Form>
    </section>
  )
}
