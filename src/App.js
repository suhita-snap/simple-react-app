import React, { useState } from 'react';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  return (
    <div className="app-container">
      <Header />
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
