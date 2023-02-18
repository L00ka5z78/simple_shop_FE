import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const auth =
      localStorage.getItem(
        'user'
      ); /** get from local storage item with key 'user' as we named it in signup component **/

    if (auth) {
      /**if auth is true == user is in localstorage navigate to '/'  */
      navigate('/');
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);

    let result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem(
      'user',
      JSON.stringify(result)
    ); /**set into localstorage stringified result. user is a key we use in other components if needed **/

    navigate('/');
  };
  return (
    <div className="register">
      <h1 className="register-text">Register</h1>
      <input
        className="input-box"
        type="text"
        placeholder="insert your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-box"
        type="email"
        placeholder="insert your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-box"
        type="password"
        placeholder="insert password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData} className="app-button" type="button">
        Sign Up
      </button>
    </div>
  );
};
