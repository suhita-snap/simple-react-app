import React from 'react';

function ItemList({ items }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item) => (
        <li key={item.id} style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
