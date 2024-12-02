// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../pages/TodoApp';

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<
    | { type: 'DELETE'; payload: string }
    | { type: 'TOGGLE_STATUS'; payload: string }
  >;
}

const TodoList: React.FC<TodoListProps> = ({ todos, dispatch }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Todos</h2>
      {todos.length === 0 && <p>No todos available.</p>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="mb-4 p-4 border rounded flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-bold">{todo.title}</h3>
            <p>{todo.description}</p>
            <p className="text-sm text-gray-600">Due: {new Date(todo.dueDate).toDateString()}</p>
            <p className="text-sm text-gray-600">
              Status: {todo.status === 'pending' ? 'Pending' : 'Completed'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={() => dispatch({ type: 'TOGGLE_STATUS', payload: todo.id })}
            >
              {todo.status === 'pending' ? 'Mark as Done' : 'Mark as Pending'}
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
