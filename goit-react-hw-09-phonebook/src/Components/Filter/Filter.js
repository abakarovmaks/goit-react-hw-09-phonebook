import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import './Filter.css';
import { CSSTransition } from 'react-transition-group';
import selectors from '../../redux/phoneBook/phoneBook-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const contacts = useSelector(selectors.getAllContacts);
  const onChangeFilter = (e) =>
    dispatch(phoneBookActions.changeFilter(e.target.value));

  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames="Filter-fade"
      unmountOnExit
    >
      <form className="form">
        <label>
          <span className="title">Find contacts by name</span>
          <input
            className="input"
            type="text"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </CSSTransition>
  );
}
