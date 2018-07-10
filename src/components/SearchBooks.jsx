import React, { Component } from 'react';
import { search, update, getAll } from '../BooksAPI'
import SearchBar from './SearchBar';
import _ from 'lodash';
import Bookshelf from './Bookshelf';

class SearchBooks extends Component {

  state = {
    query: '',
    result: [],
    booksInShelves: [],
    title: ''
  }

  componentWillMount = () => {
    getAll().then(books => this.setState({ booksInShelves: books }))
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
    const { booksInShelves } = this.state;
    const filteredBooks = booksInShelves.filter(b => b.id === bookId);
    const bookInShelf = _.first(filteredBooks);
    return bookInShelf;
  }

  onOptionClick = (book, shelf) => {
    update(book, shelf.id).then(() => {
      const { booksInShelves } = this.state;

      book.shelf = shelf.id;

      let newBooksInShelves = booksInShelves.filter(b => b.id !== book.id);

      newBooksInShelves.push(book);

      this.setState({ booksInShelves: newBooksInShelves })
    })
  }

  render() {
    const { query, result, title } = this.state;

    return <div className='books'>
      <SearchBar placeholder='Find your book' query={query} onQueryChanged={(query) => this.updateQuery(query)} />
      <Bookshelf
        id='all'
        name={title}
        books={result}
        onOptionClick={this.onOptionClick}
      />
    </div>;
  }
}

export default SearchBooks;
