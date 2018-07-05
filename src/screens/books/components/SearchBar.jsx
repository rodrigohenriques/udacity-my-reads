import React from 'react';
import PropTypes from 'prop-types';
import '../css/SearchBar.css'

const SearchBar = ({ placeholder, query, onQueryChanged }) =>
  <input
    className='search-input'
    type='text'
    placeholder={placeholder}
    value={query}
    onChange={(event) => onQueryChanged(event.target.value)}
  />

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  onQueryChanged: PropTypes.func.isRequired
}

export default SearchBar;