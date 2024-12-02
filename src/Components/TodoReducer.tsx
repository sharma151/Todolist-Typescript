// src/reducers/todoReducer.ts
import { Todo } from '../pages/TodoApp';

export type Action =
  | { type: 'ADD'; payload: Todo }
  | { type: 'UPDATE'; payload: Todo }
  | { type: 'DELETE'; payload: string }
  | { type: 'TOGGLE_STATUS'; payload: string };

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_STATUS':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' }
          : todo
      );
    default:
      return state;
  }
};
