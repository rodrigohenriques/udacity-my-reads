import React from 'react'
import PropTypes from 'prop-types';
import './AppHeader.css'

const AppHeader = ({ title, query, updateQuery }) =>
  <div className="app-header">
    <h1>{title}</h1>
    <input
      className='search-books'
      type='text'
      placeholder='Search books'
      value={query}
      onChange={(event) => updateQuery(event.target.value)}
    />
  </div>

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired
}

export default AppHeader