// src/components/TodoForm.tsx
import React, { useState } from 'react';
import { Todo } from '../pages/TodoApp';

interface TodoFormProps {
  dispatch: React.Dispatch<{
    type: 'ADD';
    payload: Todo;
  }>;
}

const TodoForm: React.FC<TodoFormProps> = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('Title and Due Date are required.');
      return;
    }
    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now().toString(),
        title,
        description,
        dueDate,
        status: 'pending',
      },
    });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <textarea
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Due Date</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
