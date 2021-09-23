import React from 'react';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const handleCheck = () => {
    toggleTodo(todo.id);
  };
  const handleDelete = () => {
    removeTodo(todo.id);
  };
  return (
    <li className="list-group-item w-25">
      <input className="mr-5" type="checkbox" onClick={handleCheck} />
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button className="btn btn-danger mt-2" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

export default Todo;
