import React from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={todo.status === 'completed'} 
        onChange={() => updateTodo(todo._id, todo.status === 'completed' ? 'ongoing' : 'completed')}
      />
      <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
        {todo.description}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
