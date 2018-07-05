import React from 'react'
import PropTypes from 'prop-types';
import '../css/AppHeader.css'

const AppHeader = ({ title }) =>
  <div className="app-header">{title}</div>

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppHeader