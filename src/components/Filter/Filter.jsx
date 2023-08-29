import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
