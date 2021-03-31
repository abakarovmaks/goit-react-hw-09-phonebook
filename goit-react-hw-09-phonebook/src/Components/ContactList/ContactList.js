import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { changeFilter } from '../../redux/phoneBook/phoneBook-actions';
import '../Fade/Fade.css';
import operations from '../../redux/phoneBook/phoneBook-operations';
import selectors from '../../redux/phoneBook/phoneBook-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getVisibleContacts);
  const onDelete = (id) => dispatch(operations.deleteContact(id));

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames="List-slideIn"
          unmountOnExit
        >
          <li className={styles.contact}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <button
              className={styles.btn}
              onClick={() => {
                onDelete(id);
              }}
              aria-label="Удалить контакт"
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
