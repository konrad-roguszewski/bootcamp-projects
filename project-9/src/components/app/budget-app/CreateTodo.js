import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CreateTodo = () => {
  return (
    <section className="CreateTodo">
      <Form>
        <input type="date" />
        <input type="text" placeholder="Value of entry" />
        <input type="text" placeholder="Leave a note here" />
        <select>
          <option>--Category--</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Accommodation</option>
        </select>
        <button>Submit</button>
      </Form>
    </section>
  )
}
