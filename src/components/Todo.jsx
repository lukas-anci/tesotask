import React from 'react';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const handleCheck = () => {
    toggleTodo(todo.id);
  };
  const handleDelete = () => {
    removeTodo(todo.id);
  };
  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" onClick={handleCheck} />
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
