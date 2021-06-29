import React from 'react'
import { CreateTodo } from './CreateTodo'
import { TodoList } from './TodoList'

export const UserContent = () => {
  return (
    <main className="App">
      <header className="App-header">
        <h3>New Entry</h3>
      </header>
      <CreateTodo />
      <h3>Budget:</h3>
      <TodoList />
      <footer className="App-footer">
        <p>Double-click to edit</p>
      </footer>
    </main>
  )
}
