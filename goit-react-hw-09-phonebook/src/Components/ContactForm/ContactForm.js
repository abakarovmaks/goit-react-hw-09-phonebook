import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/phoneBook/phoneBook-operations';
// import selectors from '../../redux/phoneBook/phoneBook-selectors';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
// import Notification from '../Notification/Notification';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [setMessage] = useState(null);

  // const contacts = useSelector(selectors.getAllContacts);
  const onSubmit = (name, number) =>
    dispatch(operations.addContact(name, number));

  const handleSetName = (e) => setName(e.target.value);

  const handleSetNumber = (e) => setNumber(e.target.value);

  // const Message = (note) => {
  //   setMessage(note);
  //   setTimeout(() => {
  //     setMessage(null);
  //   }, 2500);
  // };

  // Не работает такой вариант
  //
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case name:
  //       setName(value);
  //       break;

  //     case number:
  //       setNumber(value);
  //       break;

  //     default:
  //       console.log('Что-то не так');
  //       break;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (name === '') {
    //   setMessg('Enter contact name, please!');
    //   return;
    // }
    // if (number === '') {
    //   setMessg('Enter contact phone, please!');
    //   return;
    // }
    // if (
    //   contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())
    // ) {
    //   setMessg('Contact already exists!');
    //   return;
    // }

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      {/* <Notification message={message} /> */}
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="0ff">
        <label>
          <input
            className={styles.input}
            type="text"
            value={name}
            name="name"
            placeholder="Enter your name"
            onChange={handleSetName}
          />
        </label>
        <label>
          <input
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            placeholder="+380"
            onChange={handleSetNumber}
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
};
