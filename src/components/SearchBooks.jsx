import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../BooksAPI'
import SearchBar from './SearchBar';
import _ from 'lodash';
import Bookshelf from './Bookshelf';

class SearchBooks extends Component {
  state = {
    query: '',
    result: [],
    title: ''
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    onOptionClick: PropTypes.func.isRequired,
    classes: PropTypes.object
  }

  updateQuery = (query) => {
    this.setState({
      query,
      title: 'Loading...'
    })
    this.debouncedSearch(query.trim())
  }

  debouncedSearch = _.debounce(query => {
    search(query).then(books => {
      let result = []

      if (Array.isArray(books)) {
        result = books.map(book => this.getBookInShelfById(book.id) || book);
      }

      this.setState({
        result,
        title: `${result.length || 0} results`
      })
    });
  }, 500);

  getBookInShelfById = (bookId) => {
    const { books } = this.props;
    const filteredBooks = books.filter(b => b.id === bookId);
    const bookInShelf = _.first(filteredBooks);
    return bookInShelf;
  }

  render() {
    const { onOptionClick } = this.props;
    const { query, result, title } = this.state;

    return <div className='books'>
      <SearchBar
        placeholder='Find your book'
        query={query}
        onQueryChanged={(query) => this.updateQuery(query)}
      />
      <Bookshelf
        name={title}
        books={result}
        onOptionClick={onOptionClick}
      />
    </div>;
  }
}

export default SearchBooks;
