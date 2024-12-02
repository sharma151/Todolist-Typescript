// src/pages/TodoApp.tsx
import React, { useReducer, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import {todoReducer } from '../Components/TodoReducer';

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const [selectedStatus, setSelectedStatus] = useState<'pending' | 'completed' | 'all'>('all');

  const filteredTodos = todos.filter((todo) =>
    selectedStatus === 'all' ? true : todo.status === selectedStatus
  );

  return (
    <div className="flex h-screen">
      <Sidebar setSelectedStatus={setSelectedStatus} />
      <div className="flex flex-col flex-grow p-4">
        <TodoForm dispatch={dispatch} />
        <TodoList todos={filteredTodos} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default TodoApp;
