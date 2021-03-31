import React, { useCallback } from 'react';
import './UserMenu.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className="container">
      <img src={avatar} alt="" width="32" className="avatar" />
      <span className="name">Welcome, {name}</span>
      <button className="button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
