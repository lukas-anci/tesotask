import './App.css';

import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storagedTodos = JSON.parse(localStorage.getItem('todos-list'));
    if (storagedTodos) {
      setTodos(storagedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos-list', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
