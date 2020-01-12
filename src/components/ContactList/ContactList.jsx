import React from 'react';
import T from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {filteredContacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      number: T.string.isRequired,
      id: T.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactList;
