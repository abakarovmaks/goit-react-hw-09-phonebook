import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Title from '../Components/Title/Title';
import operations from '../redux/phoneBook/phoneBook-operations';
import selectors from '../redux/phoneBook/phoneBook-selectors';

export default function PhoneBookPage() {
  const contacts = useSelector(selectors.getAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title />

      <ContactForm />

      <Filter />

      <CSSTransition in={contacts.length > 0} timeout={0} ommountOnExit>
        <ContactList />
      </CSSTransition>
    </Container>
  );
}
