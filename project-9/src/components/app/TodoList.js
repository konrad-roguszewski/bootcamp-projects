import React from 'react'
// import Todo from './Todo'
import { database } from "../../firebase"
import { useEffect, useState } from 'react';
import { TodoInput } from './TodoInput';
import { useAuth } from '../../contexts/AuthContext'

export default function TodoList() {

  const [todos, setTodos] = useState([])
  const [newTodoName, setNewTodoName] = useState()
  const { currentUser } = useAuth()

  useEffect(() => {
    const unsubscribe = database.todos
      .where('userId', '==', currentUser.uid)
      .onSnapshot((snapshot) => {
        const todoData = []
        snapshot.forEach(doc => todoData.push({
            ...doc.data(),
            id: doc.id,
          })
        );
        setTodos(todoData);
      });
    return unsubscribe;
  }, [currentUser.uid]);

  const onCreate = () => {
    database.todos.add({
      name: parseInt(newTodoName),
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
    })
    setNewTodoName('')
  }

  const userRecords = todos.map(todo => todo.name)
  const userBalance = userRecords.reduce((a, c) => a + c, 0)

  return (
    <ul>
      <h2>Balance: {userBalance}</h2>
      <input
        value={newTodoName}
        onChange={(e) => {setNewTodoName(e.target.value)}}
        placeholder="Add value"
      />
      <button onClick={onCreate}>Create</button>
      {todos.map(todo => (
        <li key={todo.id}>
         <TodoInput todo={todo} />
        </li>
      ))}
    </ul>
  )
}
