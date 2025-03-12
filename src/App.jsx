import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');

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
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      title: newTodo.trim(),
      completed: false
    };

    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setNewTodo('');
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
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-800 rounded-xl shadow-2xl">
        <div className="p-8 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Todo List</h1>
          <form onSubmit={addTodo} className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       text-white placeholder-slate-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg
                       transition-colors duration-300 font-semibold text-white"
            >
              Add
            </button>
          </form>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="text-center text-slate-400">Loading tasks...</div>
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
