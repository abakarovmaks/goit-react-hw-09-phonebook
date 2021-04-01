import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const token = useSelector(authSelectors.getToken);

  return (
    <Route {...routeProps}>
      {token && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
