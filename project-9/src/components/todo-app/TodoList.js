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
      name: newTodoName,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
    })
  }

  return (
    <ul>
      <input value={newTodoName} onChange={(e) => {setNewTodoName(e.target.value)}}/>
      <button onClick={onCreate}>Create</button>
      {todos.map(todo => (
        <li key={todo.id}>
         <TodoInput todo={todo} />
        </li>
      ))}
    </ul>
  )
}
