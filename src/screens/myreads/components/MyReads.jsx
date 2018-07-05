import React from 'react'
import PropTypes from 'prop-types';
import AppHeader from './AppHeader'
import Bookshelf from './Bookshelf'

const MyReads = ({ reading, wantToRead, read }) =>
  <div className="my-reads">
    <AppHeader title='My Reads' />

    <Bookshelf
      title='Currently Reading'
      books={reading} />

    <Bookshelf
      title='Want to Read'
      books={wantToRead} />

    <Bookshelf
      title='Read'
      books={read} />
  </div>

MyReads.propTypes = {
  reading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
}

export default MyReads