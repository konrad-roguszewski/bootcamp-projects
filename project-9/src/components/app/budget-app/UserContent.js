import { useEffect, useState } from 'react';
import { CreateTodo } from './CreateTodo'
import { TodoList } from './TodoList'
import { useAuth } from '../../../contexts/AuthContext'
import { database } from "../../../firebase"

export const UserContent = () => {

  const [todos, setTodos] = useState([]);
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

  const userRecords = todos.map(todo => todo.amount)
  const userBalance = userRecords.reduce((a, c) => a + c, 0)

  return (
    <main>
      <header>
        <h3>New Entry</h3>
      </header>
      <CreateTodo />
      <h3>Balance: {userBalance} PLN</h3>
      <TodoList todos={todos} />
      <footer>
        <p>Double-click to edit</p>
      </footer>
    </main>
  )
}
