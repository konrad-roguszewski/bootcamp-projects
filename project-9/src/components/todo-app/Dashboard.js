import React from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
// import AddTodoButton from './AddTodoButton'
import TodoList from './TodoList'
// import { useEffect, useState } from 'react';
// import { database } from "../../firebase"
// import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {

  // const [todos, setTodos] = useState([]);
  // const { currentUser } = useAuth()

  // useEffect(() => {
  //   database.todos
  //     .doc()
  //     .get()
  //     .then(doc => {
  //       // setTodos(doc.data())
  //       // console.log(database.formatDoc(doc))
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <>
      <Navbar />
      <Container fluid>
        {/* <AddTodoButton /> */}
        <TodoList />
      </Container>
    </>
  )
}
