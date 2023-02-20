import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
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

  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch('http://localhost:5000/login', {
      //LET because we change variable
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', JSON.stringify(result.auth));

      navigate('/');
    } else {
      alert('Please enter right email!');
    }

    /**set into localstorage stringified result. user is a key we use in other components if needed just to remember **/
  };

  return (
    <div className="login">
      <h1 className="register-text">Login</h1>
      <input
        className="input-box"
        type="text"
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
      <button onClick={handleLogin} className="app-button" type="button">
        Login
      </button>
    </div>
  );
};
