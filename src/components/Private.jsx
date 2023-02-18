import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const Private = () => {
  const auth =
    localStorage.getItem(
      'user'
    ); /** get from local storage item with key 'user' as we named it in signup component **/

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="signup" />
  ); /** if user is signed up go to outlet otherwise to signup URL  */
};
