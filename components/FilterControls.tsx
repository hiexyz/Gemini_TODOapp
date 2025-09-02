
import React from 'react';
import { Filter } from '../types';

interface FilterControlsProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  onClearCompleted: () => void;
  activeTodoCount: number;
  hasCompletedTodos: boolean;
}

const FilterButton: React.FC<{
    currentFilter: Filter;
    filter: Filter;
    onClick: (filter: Filter) => void;
    children: React.ReactNode;
}> = ({ currentFilter, filter, onClick, children }) => (
    <button
        onClick={() => onClick(filter)}
        className={`transition-colors ${
            currentFilter === filter ? 'text-sky-500 font-bold' : 'text-slate-600 hover:text-slate-900'
        }`}
    >
        {children}
    </button>
);


const FilterControls: React.FC<FilterControlsProps> = ({
  activeFilter,
  onFilterChange,
  onClearCompleted,
  activeTodoCount,
  hasCompletedTodos
}) => {
  return (
    <div className="flex items-center justify-between p-4 text-sm text-slate-600 border-t border-slate-300">
      <span>{activeTodoCount} {activeTodoCount === 1 ? 'item' : 'items'} left</span>
      <div className="hidden md:flex items-center space-x-4 font-bold">
        <FilterButton currentFilter={activeFilter} filter="all" onClick={onFilterChange}>All</FilterButton>
        <FilterButton currentFilter={activeFilter} filter="active" onClick={onFilterChange}>Active</FilterButton>
        <FilterButton currentFilter={activeFilter} filter="completed" onClick={onFilterChange}>Completed</FilterButton>
      </div>
      <button
        onClick={onClearCompleted}
        className={`transition-colors text-slate-600 hover:text-slate-900 ${!hasCompletedTodos && 'opacity-50 cursor-not-allowed'}`}
        disabled={!hasCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterControls;