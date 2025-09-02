
import React from 'react';
import { Todo } from '../types';
import CheckIcon from './icons/CheckIcon';
import TrashIcon from './icons/TrashIcon';

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li className="flex items-center p-4 group">
      <button
        onClick={() => onToggleTodo(todo.id)}
        className={`w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-4 transition-all duration-300 ${
          todo.completed
            ? 'bg-gradient-to-br from-sky-400 to-cyan-400 border-sky-400'
            : 'border-slate-400 hover:border-sky-500'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <CheckIcon />}
      </button>
      <span
        className={`flex-grow text-slate-700 transition-colors duration-300 ${
          todo.completed ? 'line-through text-slate-500' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="ml-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Delete todo"
      >
        <TrashIcon />
      </button>
    </li>
  );
};

export default TodoItem;