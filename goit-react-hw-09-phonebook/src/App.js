import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AppBar from './Components/AppBar';
import Container from './Components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            restricted
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginPage}
          />
          <PrivateRoute
            path="/contacts"
            component={PhoneBookPage}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func,
};
