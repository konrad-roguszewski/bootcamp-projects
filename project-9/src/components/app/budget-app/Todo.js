import React, { useState } from 'react'
import styled from 'styled-components'

const Entry = styled.li`
  display: flex;
`

const Input = styled.input`
  width: 100px;
`

export const Todo = ({ todo }) => {
  const [options, setOptions] = useState('0')

  return (
    <Entry className="Todo">
      <select
        value={todo.category}
        onChange={() => {}}
        disabled
      >
        <option value="0" disabled>
          --Category--
        </option>
        <option value="1">Food</option>
        <option value="2">Transport</option>
        <option value="3">Accommodation</option>
      </select>
      <Input
        type="text"
        placeholder="Note"
        defaultValue={todo.note}
        disabled
      />
      <input
        type="date"
        defaultValue={todo.date}
        disabled
      />
      <Input
        type="text"
        placeholder="Value"
        defaultValue={todo.value}
        disabled
      />
      <button>x</button>
    </Entry>
  )
}
