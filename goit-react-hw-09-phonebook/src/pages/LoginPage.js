import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
// import authSelectors from '../redux/auth/auth-selectors';
import { CSSTransition } from 'react-transition-group';
// import Notification from '../Components/Notification/Notification';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const error = useSelector(authSelectors.getError);
  // const isLoadingAuth = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.log(`Wow! What is this??`);
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="Title-SlideIn"
        unmountOnExit
      >
        <h1 className="Title">Enter your data</h1>
      </CSSTransition>

      {/* <Notification message={error} /> */}

      <form className="Form" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email" className="Label">
          Email
        </label>
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="Label">
          Password
        </label>
        <input
          className="Input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="Button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  error: PropTypes.string,
  isLoadingAuth: PropTypes.bool,
};
