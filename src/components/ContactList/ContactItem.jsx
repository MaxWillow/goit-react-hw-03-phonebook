import React from 'react';
import T from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.outline}>
    <p className={styles.text}>{`${contact.name}: ${contact.number}`}</p>
    <button type="button" onClick={onDeleteContact} className={styles.button}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: T.shape({
    name: T.string.isRequired,
    number: T.string.isRequired,
  }).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactItem;
