import React from 'react'
import PropTypes from 'prop-types';
import '../css/AppHeader.css'
import { Link } from 'react-router-dom'
import SearchIcon from '../../../icons/search.svg'

const AppHeader = ({ title }) =>
  <div className="app-header">
    <div className="app-header-title">
      <p>{title}</p>
      <Link to='/books' className='app-header-find-books'>
        <img src={SearchIcon} className='app-header-find-books-icon' />
      </Link>
    </div>
  </div>

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppHeader