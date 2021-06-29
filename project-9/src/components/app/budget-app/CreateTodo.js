import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CreateTodo = () => {
  const [options, setOptions] = useState("0")

  return (
    <section className="CreateTodo">
      <Form>
        <input type="date" />
        <input type="text" placeholder="Value of entry" />
        <input type="text" placeholder="Leave a note here" />
        <select
          value={options}
          onChange={() => {}}
        >
          <option value="0" disabled>--Category--</option>
          <option value="1">Food</option>
          <option value="2">Transport</option>
          <option value="3">Accommodation</option>
        </select>
        <button>Submit</button>
      </Form>
    </section>
  )
}
