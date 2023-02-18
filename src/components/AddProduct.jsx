import React, { useState } from 'react';

export const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const addProduct = () => {
    console.warn(name, price, category, company);
  };

  return (
    <div className="product">
      <h1>Add product</h1>
      <input
        className="input-box"
        type="text"
        placeholder="insert product name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-box"
        type="text"
        placeholder="insert product price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="input-box"
        type="text"
        placeholder="insert product category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="input-box"
        type="text"
        placeholder="insert product company..."
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={addProduct} className="app-button">
        Add product
      </button>
    </div>
  );
};
