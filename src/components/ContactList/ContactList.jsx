import React, { useEffect } from 'react';

import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContact,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { deleteContacts, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContact = useSelector(selectVisibleContact);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul className={css.list}>
        {visibleContact.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            {name + ' : ' + phone}
            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(id))}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default ContactList;
