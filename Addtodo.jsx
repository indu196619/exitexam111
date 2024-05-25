import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');

  const onSubmit = (e) => {
    e.preventDefault();
    if (description) {
      addTodo(description, status);
      setDescription('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Add a todo" 
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
