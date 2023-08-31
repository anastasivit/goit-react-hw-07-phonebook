import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <li className={styles.item}>
      <span>{name}</span>
      <span>{number || 'No number available'}</span>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
