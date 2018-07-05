import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Bookshelf.css'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { title, books } = this.props;

    return <div className='bookshelf'>
      <p className='bookshelf-title'>{title}</p>
      <ol className='bookshelf-list'>
        {books.map(element => (
          <li key={element.title} className='bookshelf-list-item'>
            <p className='bookshelf-list-item-title'>{element.title}</p>
          </li>
        ))}
      </ol>
    </div>;
  }
}

export default Bookshelf;