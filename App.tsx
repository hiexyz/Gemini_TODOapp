
import React, { useState, useMemo } from 'react';
import { Todo, Filter } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterControls from './components/FilterControls';

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeTodoCount = useMemo(() => {
    return todos.filter(todo => !todo.completed).length;
  }, [todos]);

  return (
    <div className="min-h-screen font-sans flex flex-col items-center pt-8 md:pt-16 text-slate-800">
      <div className="w-full max-w-2xl px-4">
        <Header />
        <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden mt-8">
          <TodoInput onAddTodo={addTodo} />
          {todos.length > 0 ? (
            <>
              <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
              <FilterControls
                activeFilter={filter}
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
                activeTodoCount={activeTodoCount}
                hasCompletedTodos={todos.some(t => t.completed)}
              />
            </>
          ) : (
            <p className="text-center text-slate-600 p-8">Your task list is empty. Add a new task to get started!</p>
          )}
        </div>
      </div>
       <footer className="text-center text-slate-700 font-medium mt-12 pb-4">
        <p>Created by a Gemini-powered React Engineer</p>
        <p>A simple yet powerful TODO application</p>
      </footer>
    </div>
  );
};

export default App;