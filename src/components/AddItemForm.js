import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddItem(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
        style={{ padding: '10px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>
        Add
      </button>
    </form>
  );
}

export default AddItemForm;
