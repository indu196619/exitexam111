// src/components/TodoList.js
import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
