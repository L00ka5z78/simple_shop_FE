import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products'); //get method by default
    result = await result.json();
    setProducts(result);
    // setProducts(await result.json());    //shorter version without changing variable
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      alert('Product deleted');
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S. No.</li>
        <li> Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Action</li>
      </ul>
      {products.map((prevProducts, index) => (
        <ul key={prevProducts._id}>
          <li>{index + 1}</li>
          <li>{prevProducts.name}</li>
          <li>{prevProducts.price}</li>
          <li>{prevProducts.company}</li>
          <li>{prevProducts.category}</li>
          <li>
            <button onClick={() => deleteProduct(prevProducts._id)}>
              Delete
            </button>
            <Link to={`/update/${prevProducts._id}`}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
