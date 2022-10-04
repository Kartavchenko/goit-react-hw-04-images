import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ handleOnSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleOnSearch(query);
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className="button-label">Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  button: PropTypes.string,
  span: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
