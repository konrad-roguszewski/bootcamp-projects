import React from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
// import AddTodoButton from './AddTodoButton'

// import TodoList from './TodoList'

// import { useEffect, useState } from 'react';
// import { database } from "../../firebase"
// import { useAuth } from '../../contexts/AuthContext'
import { UserContent } from './budget-app/UserContent'

export default function Dashboard() {

  return (
    <>
      <Navbar />
      <Container fluid>
        
        {/* <AddTodoButton /> */}
        {/* <TodoList />*/}
        <UserContent />

      </Container>
    </>
  )
}
