import React, { useState } from 'react';

export const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);

  const addProduct = async () => {
    // console.warn(name, price, category, company);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    /**localstorage gives stringified result. therefore we have to parse it into object and get user id **/
    console.warn(userId);

    let result = await fetch('http://localhost:5000/add-product', {
      //LET because we change variable
      method: 'POST',
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer  ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    result = await result.json();
    console.warn(result);
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
      {error && !name && (
        <span className="invalid-input">insert valid name...</span>
      )}
      <input
        className="input-box"
        type="text"
        placeholder="insert product price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && (
        <span className="invalid-input">insert valid price...</span>
      )}

      <input
        className="input-box"
        type="text"
        placeholder="insert product category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && (
        <span className="invalid-input">insert valid category...</span>
      )}
      <input
        className="input-box"
        type="text"
        placeholder="insert product company..."
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && (
        <span className="invalid-input">insert valid company...</span>
      )}
      <button onClick={addProduct} className="app-button">
        Add product
      </button>
    </div>
  );
};

/**       {error && !name && <span className="invalid-input">Enter valid name...</span>}
 *  throw error if theres no name dispaly error message == span
 * 
 * @todoADD ability REFRESHING FORM AFTER PRODUCT IS ADDED************* 

 */
