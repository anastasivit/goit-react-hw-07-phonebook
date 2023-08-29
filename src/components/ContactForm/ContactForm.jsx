import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleNameChange = event => setName(event.target.value);
  const handlePhoneChange = event => setPhone(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (name === '' || phone === '') {
      alert('Please fill in all fields');
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
