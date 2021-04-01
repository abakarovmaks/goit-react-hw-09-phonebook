import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/phoneBook/phoneBook-operations';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (name, number) =>
    dispatch(operations.addContact(name, number));

  const handleSetName = (e) => setName(e.target.value);

  const handleSetNumber = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
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
