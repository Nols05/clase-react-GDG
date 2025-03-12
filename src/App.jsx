import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (savedTodos.length > 0) {
      setTodos(savedTodos);
      setLoading(false);
    } else {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          const initialTodos = data.slice(0, 5).map(todo => ({
            ...todo,
            title: todo.title.charAt(0).toUpperCase() + todo.title.slice(1)
          }));
          setTodos(initialTodos);
          localStorage.setItem('todos', JSON.stringify(initialTodos));
          setLoading(false);
        });
    }
  }, []);

  function addTodo(e) {
    e.preventDefault();

    const todoName = e.target.todoName.value;

    const todo = {
      id: Date.now(),
      title: todoName,
      completed: false
    };

    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <div className="card-header">
          <h1 className="card-title">Todo List</h1>
          <form onSubmit={addTodo} className="todo-form">
            <input
              name='todoName'
              placeholder="What needs to be done?"
              className="todo-input"
            />
            <button
              type="submit"
              className="add-button"
            >
              Add
            </button>
          </form>
        </div>

        <div className="list-container">
          {loading ? (
            <div className="loading-message">Loading tasks...</div>
          ) : (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
