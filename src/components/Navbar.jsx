import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/ear.png';

export const Navbar = () => {
  const auth = localStorage.getItem('user');
  /** get from local storage item with key 'user' as we named it in signup component **/

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div>
      <img src={Logo} alt="logo" className="logo" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/add"> ADD PRODUCT</Link>
          </li>
          <li>
            <Link to="/update">Update PRODUCT</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          {' '}
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

/*auth ---if user is in localstorage show logout and products links otherwise signup or register
data in localstorage is string so we need to parse it ===  {JSON.parse(auth).name}
*/
