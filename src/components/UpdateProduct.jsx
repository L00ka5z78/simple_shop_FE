import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const UpdateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const params = useParams(); //get a product id
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/products/${params.id}`, {
      headers: {
        authorization: `bearer  ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    result = await result.json();
    console.log(result); //gets whole object with products data, so you can use it and pre-fill form with current data
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.warn(name, price, category, company);

    let result = await fetch(`http://localhost:5000/products/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'Application/json',
        authorization: `bearer  ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    result = await result.json();
    // console.log(result);
    if (result) {
      navigate('/');
    }
  };

  // console.warn(result);

  return (
    <div className="product">
      <h1>Update product</h1>
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

      <button onClick={updateProduct} className="app-button">
        Update product
      </button>
    </div>
  );
};

/**       
 * 
 * @todoADD ability REFRESHING FORM AFTER PRODUCT IS updated************* 

 */
