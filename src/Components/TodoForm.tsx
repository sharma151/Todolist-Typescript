import React, { useState } from 'react';


interface TodoFormProps {
  dispatch: React.Dispatch<{ type: 'ADD'; payload: Todo }>;
}

const TodoForm: React.FC<TodoFormProps> = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, dueDate } = formData;

    if (!title || !dueDate) {
      alert('Title and Due Date are required.');
      return;
    }

    dispatch({
      type: 'ADD',
      payload: { ...formData, id: Date.now().toString(), status: 'pending' },
    });
    setFormData({ title: '', description: '', dueDate: '' });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      {[
        { label: 'Title', type: 'text', name: 'title' },
        { label: 'Description', type: 'textarea', name: 'description' },
        { label: 'Due Date', type: 'date', name: 'dueDate' },
      ].map(({ label, type, name }) => (
        <div key={name} className="mb-2">
          <label className="block mb-1">{label}</label>
          {type === 'textarea' ? (
            <textarea
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <input
              type={type}
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
