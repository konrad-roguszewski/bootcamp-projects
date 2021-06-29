import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { database } from "../../../firebase"

const Entry = styled.li`
  display: flex;
`

const Input = styled.input`
  width: 100px;
`

export const Todo = ({ todo }) => {
  const [category, setCategory] = useState(todo.category)
  const [note, setNote] = useState(todo.note)
  const [date, setDate] = useState(todo.date)
  const [amount, setAmount] = useState(todo.amount)
  const noteContent = useRef();
  const amountContent = useRef();
  const dateContent = useRef();

  const onCategoryUpdate = (e) => {
    database.todos.doc(todo.id).set({
      ...todo,
      category,
    })
    
  }

  const onNoteUpdate = (e) => {
    database.todos.doc(todo.id).set({
      ...todo,
      note,
    })
    if (e.key === 'Enter'){
      toggleInputState(noteContent)
    }
  }

  const onDateUpdate = (e) => {
    database.todos.doc(todo.id).set({
      ...todo,
      date,
    })
    if (e.key === 'Enter'){
      // toggleTodoState()
      console.log("date changed: " + todo.id)
    }
    // setDate(e.target.value)

  }

  const onAmountUpdate = (e) => {
    database.todos.doc(todo.id).set({
      ...todo,
      amount,
    })
    if (e.key === 'Enter'){
      toggleInputState(amountContent)
    }
  }

  const onDelete = (e) => {
    database.todos.doc(todo.id).delete()
  }

  // const toggleNoteState = () => {
  //   noteContent.current.disabled = !noteContent.current.disabled;
  //   noteContent.current.focus();
  // };

  const toggleInputState = (content) => {
    content.current.disabled = !content.current.disabled;
    content.current.focus();
  };

  // console.log(category)
  // console.log(noteContent)

  return (
    <Entry
      // onDoubleClick={toggleNoteState}
    >
      <select
        value={category}
        onChange={(e) => {setCategory(e.target.value)}}
        // onChange={(e) => onCategoryUpdate(e)}

        // disabled

        onKeyDown={e => onCategoryUpdate(e)}
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
        value={note}
        onChange={(e) => {setNote(e.target.value)}}
        // disabled

        onKeyDown={e => onNoteUpdate(e)}
        ref={noteContent}
        onDoubleClick={() => toggleInputState(noteContent)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => {setDate(e.target.value)}}
        // disabled

        onKeyDown={e => onDateUpdate(e)}
        ref={dateContent}
        onDoubleClick={() => toggleInputState(dateContent)}
      />
      <Input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {setAmount((parseInt(e.target.value)))}}
        // disabled

        onKeyDown={e => onAmountUpdate(e)}
        ref={amountContent}
        onDoubleClick={() => toggleInputState(amountContent)}
      />
      <button onClick={onDelete}>x</button>
    </Entry>
  )
}
