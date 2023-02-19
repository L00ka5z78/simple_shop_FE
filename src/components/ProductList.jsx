import React, { useState, useEffect } from 'react';

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
  console.log(products);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>S. No.</li>
        <li> Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
      </ul>
      {products.map((prevProducts, index) => (
        <ul key={prevProducts}>
          <li>{index + 1}</li>
          <li>{prevProducts.name}</li>
          <li>{prevProducts.price}</li>
          <li>{prevProducts.company}</li>
          <li>{prevProducts.category}</li>
        </ul>
      ))}
    </div>
  );
};