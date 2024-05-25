// src/components/Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './Todolist';
import Addtodo from,
import Filter from './Filter';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (description, status) => {
    try {
      const response = await axios.post('http://localhost:5000/api/todos', { description, status });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodo = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/todos/${id}`, { status });
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'incomplete') return todo.status !== 'completed';
    return true;
  });

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Main;
