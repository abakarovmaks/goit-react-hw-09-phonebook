import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Title from '../Components/Title/Title';
import operations from '../redux/phoneBook/phoneBook-operations';
// import Notification from '../Components/Notification/Notification';
import selectors from '../redux/phoneBook/phoneBook-selectors';

export default function PhoneBookPage() {
  const contacts = useSelector(selectors.getAllContacts);
  // const isLoadingContacts = useSelector(selectors.getLoading);
  // const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title />

      {/* <Notification message={error} /> */}

      <ContactForm />

      <Filter />

      <CSSTransition in={contacts.length > 0} timeout={0} ommountOnExit>
        <ContactList />
      </CSSTransition>
    </Container>
  );
}

PhoneBookPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  fetchContacts: PropTypes.func,
  // isLoadingContacts: PropTypes.bool,
  // error: PropTypes.string,
};
