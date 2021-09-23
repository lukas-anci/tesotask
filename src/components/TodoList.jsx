import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
