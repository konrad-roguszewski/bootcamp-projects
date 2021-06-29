import React from 'react'
import styled from 'styled-components'

const Entry = styled.li`
  display: flex;
`;

const Input = styled.input`
  width: 100px;
`;

export const Todo = () => {
  return (
    <Entry className="Todo">
      <select>
        <option>--Category--</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Accommodation</option>
      </select>
      <Input type="text" placeholder="Note" />
      <input type="date" />
      <Input type="text" placeholder="Value" />
      <button>x</button>
    </Entry>
  )
}
