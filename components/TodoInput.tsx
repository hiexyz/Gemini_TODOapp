
import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAddTodo(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex items-center bg-white/50 rounded-lg overflow-hidden ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-sky-500 transition-all">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Create a new todo..."
          className="w-full bg-transparent p-4 text-slate-700 placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-5 rounded-r-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-stretch"
          disabled={!text.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;