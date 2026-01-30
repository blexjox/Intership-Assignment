import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import SearchSortFilter from "../components/SearchSortFilter";

import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setFilteredTodos(todos); // Initialize filteredTodos with all todos
  }, [todos]);

  const addTodo = (title, description, priority) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
      priority: priority || 'medium',
      date: new Date().toISOString().split('T')[0]
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTitle, updatedDescription) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo
    );
    setTodos(updatedTodos);
  };

  const updatePriority = (id, priority) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to update filtered todos
  const updateFilteredTodos = (filtered) => {
    setFilteredTodos(filtered);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Simple Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <SearchSortFilter 
          todos={todos} 
          updateFilteredTodos={updateFilteredTodos} 
        />
        <TodoList
          todos={filteredTodos} // Use filteredTodos instead of todos
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          updatePriority={updatePriority}
        />
        <div className="stats">
          <p>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | Pending: {todos.filter(t => !t.completed).length}</p>
          <p>Showing: {filteredTodos.length} todos</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
